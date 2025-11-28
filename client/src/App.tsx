import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import { Contact } from './types/contact';

const App: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const addContact = (contact: Contact) => {
        setContacts([...contacts, contact]);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Contact Manager</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContactForm addContact={addContact} />
            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default App;