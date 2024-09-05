import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// -------------------------------- GEMINI IA -------------------------------------------------- //

// Simulação da resposta da API do Google Gemini, função feita para evitar o problema de ter muitas requisições na IA
export const simulateGeminiResponse = async (imageBase64: string): Promise<string> => {
  // Simula um valor de leitura extraído da imagem
  return "3900";  // Retorne um valor numérico simulado
  
};
// -------------------------------- GEMINI IA -------------------------------------------------- //


export const processImageWithGemini = async (imageBase64: string): Promise<string> => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const result = await model.generateContent([
    {
      inlineData: {
        data: imageBase64,
        mimeType: "image/png",
      },
    },
    { text: "Extract the meter reading value from this image." },
  ]);

  return result.response.text();
};

// Função para retry com backoff exponencial
export const retryWithBackoff = async (fn: () => Promise<any>, retries = 3, delay = 1000): Promise<any> => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(res => setTimeout(res, delay));
    return retryWithBackoff(fn, retries - 1, delay * 2);
  }
};
