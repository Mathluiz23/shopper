import { Router } from 'express';
import uploadRoute from './uploadRoute';
import confirmRoute from './confirmRoute';
import listRoute from './listRoute';
import customerRoute from './customerRoute'

const router = Router();

router.use('/images', uploadRoute);
router.use('/images', confirmRoute);
router.use('/customers', listRoute);
router.use('', customerRoute);

export default router;
