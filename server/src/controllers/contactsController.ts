import { Request, Response } from 'express';
import Contact from '../models/contact';

export const addContact = async (req: Request, res: Response) => {
    try {
        const { name, phone, email } = req.body;
        const newContact = new Contact({ name, phone, email });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Error adding contact', error });
    }
};

export const getContacts = async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contacts', error });
    }
};

export const searchContacts = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;
        const contacts = await Contact.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { phone: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error searching contacts', error });
    }
};