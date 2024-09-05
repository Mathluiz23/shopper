import { Router } from 'express';
import { listCustomersController } from '../controllers/customerControler';

const router = Router();

router.get('/customers', listCustomersController);

export default router;
