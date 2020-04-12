import React from 'react';

const SearchBar = ({ setSearch }) => <input type="search" className="search-bar input is-centered has-text-centered" placeholder="Find products..." onChange={e => setSearch(e.target.value)} />

export default SearchBar;
