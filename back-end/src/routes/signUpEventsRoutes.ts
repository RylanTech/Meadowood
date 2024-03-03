import { Router } from 'express';
import { createEvent, deleteEvent, editEvent, getAllEvents, getEvent } from '../controllers/signUpEventController';

const router = Router();

router.post('/', createEvent);
router.put('/:id', editEvent);
router.get('/', getAllEvents);
router.get('/:id', getEvent);
router.delete('/:id', deleteEvent);

export default router;