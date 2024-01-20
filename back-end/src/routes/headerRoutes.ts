import { Router } from 'express';
import { editHeader, getHeader } from '../controllers/headerController';

const router = Router();

router.get('/', getHeader);
router.post('/', editHeader);


export default router;