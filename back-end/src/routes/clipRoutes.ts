import { Router } from 'express';
import { createClip, deleteClip, getClips } from '../controllers/clipController';

const router = Router();

router.get('/', getClips);
router.post('/', createClip)
router.delete('/:id', deleteClip)


export default router;