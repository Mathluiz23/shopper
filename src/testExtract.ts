// ARQUIVO PARA TESTE

// import express, { Request, Response } from 'express';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// // Função para fazer o download da imagem e salvar localmente
// const downloadImage = async (url: string, outputPath: string) => {
//   const response = await axios({
//     url,
//     responseType: 'arraybuffer',
//   });
//   fs.writeFileSync(outputPath, response.data);
// };

// // Função para converter uma imagem em Base64
// const convertImageToBase64 = (filePath: string): string => {
//   const imageBuffer = fs.readFileSync(filePath);
//   return imageBuffer.toString('base64');
// };

// // Endpoint para fazer upload da imagem via URL e extrair o valor
// app.post('/upload', async (req: Request, res: Response) => {
//     try {
//       const { image } = req.body;
  
//       if (!image) {
//         return res.status(400).send('O campo "image" é obrigatório.');
//       }
  
//       const imagePath = path.join(__dirname, 'temp_image.png');
//       await downloadImage(image, imagePath);
//       const imageBase64 = convertImageToBase64(imagePath);
  
//       const model = genAI.getGenerativeModel({
//         model: "gemini-1.5-pro",
//       });
  
//       const result = await model.generateContent([
//         {
//           inlineData: {
//             data: imageBase64,
//             mimeType: "image/png",
//           },
//         },
//         { text: "Extract the meter reading from this image." },
//       ]);
  
//       fs.unlinkSync(imagePath);
  
//       const extractedValue = result.response.text().match(/\d+/g)?.join('') || '';
  
//       if (!extractedValue) {
//         return res.status(500).send('Erro ao extrair o valor numérico da imagem.');
//       }
  
//       return res.send(extractedValue);
  
//     } catch (error) {
//       console.error("Erro ao processar a imagem:", error);
//       return res.status(500).send('Erro ao processar a imagem.');
//     }
//   });
  
  

// // Inicia o servidor
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
