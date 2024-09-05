import { Request, Response } from 'express';
import { confirmMeasure } from '../services/confirmService';

export const confirmMeasureController = async (req: Request, res: Response) => {
  console.log('Rota /confirm acessada'); // Verificação de log
  try {
    const { measure_uuid } = req.params;
    const { confirmed_value } = req.body;

    if (!measure_uuid || confirmed_value === undefined) {
      return res.status(400).json({
        error_code: 'INVALID_DATA',
        error_description: 'UUID da medida e o valor confirmado são necessários',
      });
    }

    await confirmMeasure(measure_uuid, confirmed_value);

    return res.status(200).json({ message: 'Medida confirmada com sucesso' });
  } catch (error: any) {
    console.error('Erro ao confirmar a medida:', error);

    let error_code = 'CONFIRMATION_ERROR';
    let error_description = 'Erro ao confirmar a medida';

    if (error.message === 'MEASURE_NOT_FOUND') {
      error_code = 'MEASURE_NOT_FOUND';
      error_description = 'Medida não encontrada';
    } else if (error.message === 'CONFIRMATION_DUPLICATE') {
      error_code = 'CONFIRMATION_DUPLICATE';
      error_description = 'Medida já confirmada anteriormente';
    }

    return res.status(500).json({
      error_code,
      error_description,
    });
  }
};



