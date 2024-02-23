import { Router } from 'express';
import { createStaff, deleteStaff, editStaff, getAllStaff, getOneStaff } from '../controllers/staffController';

const router = Router();

router.get('/', getAllStaff);
router.get('/getone/:id', getOneStaff)
router.put('/', editStaff);
router.post('/', createStaff)
router.delete('/:id', deleteStaff)


export default router;