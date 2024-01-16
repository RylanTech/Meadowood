import { Router } from 'express';
import { createClip, deleteClip, editClip, getClip, getClips } from '../controllers/clipController';

const router = Router();

router.get('/', getClips);
router.get('/oneclip/:id', getClip)
router.post('/', createClip)
router.put('/:id', editClip)
router.delete('/:id', deleteClip)


export default router;