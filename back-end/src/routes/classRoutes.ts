import { Router } from 'express';
import { changeClass, createClass, deleteClass, getClasses, getOneClass } from '../controllers/classController';

const router = Router();

router.get('/', getClasses);
router.get('/get-one/:id', getOneClass);
router.post('/', createClass);
router.put('/update/:id', changeClass);
router.delete('/delete/:id', deleteClass);

export default router;