import { Router } from 'express';
import { confirmMeasureController } from '../controllers/confirmController';

const router = Router();

router.patch('/confirm/:measure_uuid', confirmMeasureController);

export default router;