import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;