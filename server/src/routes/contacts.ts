import { Router } from 'express';
import { createContact, getContacts, updateContact, deleteContact, searchContacts } from '../controllers/contactsController';

const router = Router();

router.post('/contacts', createContact);
router.get('/contacts', getContacts);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);
router.get('/contacts/search', searchContacts);

export default router;