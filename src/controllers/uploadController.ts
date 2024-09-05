import { Request, Response } from 'express';
import { processImageUpload } from '../services/uploadService';

export const uploadImageAndExtractValue = async (req: Request, res: Response) => {
  try {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    if (!image || !customer_code || !measure_datetime || !measure_type) {
      return res.status(400).json({
        error_code: "INVALID_DATA",
        error_description: "Todos os campos (image, customer_code, measure_datetime, measure_type) são obrigatórios."
      });
    }

    const measure = await processImageUpload(image, customer_code, measure_datetime, measure_type);

    return res.json({
      image_url: measure.image_url,
      measure_value: measure.measure_value,
      measure_uuid: measure.measure_uuid,
    });
  } catch (error) {
    console.error("Erro ao processar a imagem:", error);
    return res.status(500).json({
      error_code: "INTERNAL_SERVER_ERROR",
      error_description: "Erro ao processar a imagem."
    });
  }
};



