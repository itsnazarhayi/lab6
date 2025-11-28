import React from 'react';
import { Contact } from '../types/contact';

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>Name:</strong> {contact.name} <br />
            <strong>Phone:</strong> {contact.phone} <br />
            <strong>Email:</strong> {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;