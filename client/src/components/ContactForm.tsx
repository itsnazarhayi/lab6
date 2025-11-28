import React, { useState } from 'react';

const ContactForm: React.FC<{ onAddContact: (contact: { name: string; phone: string; email: string }) => void }> = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && phone && email) {
            onAddContact({ name, phone, email });
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;