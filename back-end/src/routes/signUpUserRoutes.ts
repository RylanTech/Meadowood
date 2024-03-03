import { Router } from 'express';
import { createPerson, deletePerson, editPerson, getAllPeople, getPerson } from '../controllers/signUpUser';

const router = Router();

router.post('/', createPerson);
router.put('/', editPerson);
router.get('/', getAllPeople);
router.get('/:id', getPerson);
router.delete('/:id', deletePerson);

export default router;