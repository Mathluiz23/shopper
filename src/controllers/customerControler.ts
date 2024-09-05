import { Request, Response } from 'express';
import { listCustomers } from '../services/customerService';

export const listCustomersController = async (req: Request, res: Response) => {
  try {
    const customers = await listCustomers();

    return res.status(200).json(customers);
  } catch (error) {
    console.error('Erro ao listar os clientes:', error);
    return res.status(500).json({
      error_code: 'LISTING_ERROR',
      error_description: 'Erro ao listar os clientes',
    });
  }
};
