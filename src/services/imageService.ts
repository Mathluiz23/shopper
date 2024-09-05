import fs from 'fs';
import axios from 'axios';

export const downloadImage = async (url: string, outputPath: string) => {
  const response = await axios({
    url,
    responseType: 'arraybuffer',
  });
  fs.writeFileSync(outputPath, response.data);
};

export const convertImageToBase64 = (filePath: string): string => {
  const imageBuffer = fs.readFileSync(filePath);
  return imageBuffer.toString('base64');
};



// import axios from 'axios';
// import fs from 'fs';

// export const downloadImage = async (url: string, outputPath: string) => {
//   const response = await axios({
//     url,
//     responseType: 'arraybuffer',
//   });
//   fs.writeFileSync(outputPath, response.data);
// };

// export const convertImageToBase64 = (filePath: string): string => {
//   const imageBuffer = fs.readFileSync(filePath);
//   return imageBuffer.toString('base64');
// };
