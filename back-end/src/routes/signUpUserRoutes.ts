import { Router } from 'express';
import { createPerson, deletePerson, editPerson, getAllPeople, getAllPeopleByEvent, getPerson } from '../controllers/signUpUser';

const router = Router();

router.post('/', createPerson);
router.put('/:id', editPerson);
router.get('/', getAllPeople);
router.get('/event/:id', getAllPeopleByEvent)
router.get('/:id', getPerson);
router.delete('/:id', deletePerson);

export default router;