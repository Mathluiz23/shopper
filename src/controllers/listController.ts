import { Request, Response } from 'express';
import { listMeasuresByCustomer } from '../services/listService';

export const listMeasuresController = async (req: Request, res: Response) => {
  console.log("rota list acessada")
  try {
    const { customer_code } = req.params;

    if (!customer_code) {
      return res.status(400).json({
        error_code: 'INVALID_DATA',
        error_description: 'Código do cliente é obrigatório',
      });
    }

    const measures = await listMeasuresByCustomer(customer_code);

    return res.json(measures);
  } catch (error) {
    console.error('Erro ao listar medidas:', error);
    return res.status(500).json({
      error_code: 'LISTING_ERROR',
      error_description: 'Erro ao listar medidas',
    });
  }
};



