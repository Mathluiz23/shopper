import { Router } from 'express';
import { uploadImageAndExtractValue } from '../controllers/uploadController';

const router = Router();

router.post('/upload', uploadImageAndExtractValue);

export default router;
