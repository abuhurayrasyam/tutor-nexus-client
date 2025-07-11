import React from 'react';

const SearchTutors = ({setSearch}) => {
    return (
        <label className="input border=2 border-secondary">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search by Language" />
        </label>
    );
};

export default SearchTutors;