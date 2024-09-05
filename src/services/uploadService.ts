import { v4 as uuidv4 } from 'uuid';
import { Measure } from '../models/Measure';
import { downloadImage, convertImageToBase64 } from './imageService';
import { processImageWithGemini, retryWithBackoff } from './geminiService';
import { simulateGeminiResponse } from './geminiService'; 


export const processImageUpload = async (imageUrl: string, customer_code: string, measure_datetime: string, measure_type: string) => {
    // Gerar um UUID para a medida
    const measure_uuid = uuidv4();

    // Definir o caminho temporário para salvar a imagem
    const imagePath = `uploads/${customer_code}-${Date.now()}.png`;

    // Fazer o download e converter a imagem para base64
    await downloadImage(imageUrl, imagePath);
    const imageBase64 = convertImageToBase64(imagePath);

    // -------------------------------- GEMINI IA -------------------------------------------------- //

    // Enviar a imagem para a API do Gemini para extrair o valor de leitura do medidor
    const resultText = await simulateGeminiResponse(imageBase64); // Simulação da resposta da API do Google Gemini, função feita para evitar o problema de ter muitas requisições na IA 
    
    //  Função de baixo é a função real para trabalhar com a IA. 
    // const resultText = await retryWithBackoff(() => processImageWithGemini(imageBase64));

    // -------------------------------- GEMINI IA -------------------------------------------------- //


    const match = resultText.match(/\d+/);
    const measure_value = match ? parseInt(match[0], 10) : 0;

    // Criar o link temporário da imagem
    const image_url = `https://fakeurl.com/temp_images/${measure_uuid}`;

    const measure = await Measure.create({
        measure_uuid,
        customer_code,
        measure_datetime: new Date(measure_datetime),
        measure_type,
        measure_value,
        image_url,
        has_confirmed: false,
    });

    return measure;
};