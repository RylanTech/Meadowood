import { Router } from 'express';
import { aboutText, editAbout } from '../controllers/aboutController';

const router = Router();

router.get('/', aboutText);
router.post('/', editAbout);


export default router;