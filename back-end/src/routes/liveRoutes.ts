import { Router } from 'express';
import { editStatus, liveStatus } from '../controllers/liveController';

const router = Router();

router.get('/', liveStatus);
router.post('/', editStatus);


export default router;