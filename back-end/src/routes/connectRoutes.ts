import { Router } from 'express';
import { createConnection, deleteConnection, getConnection, getConnections } from '../controllers/connectController';

const router = Router();

router.get('/', getConnections);
router.get('/oneconnection/:id', getConnection);
router.post('/', createConnection);
router.delete('/:id', deleteConnection);


export default router;