import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearch }) => <input type="search" className="search-bar input is-centered has-text-centered" placeholder="Find products..." onChange={(e) => setSearch(e.target.value)} />;


SearchBar.propTypes = {
  setSearch: PropTypes.instanceOf(Function).isRequired,
};

export default SearchBar;
