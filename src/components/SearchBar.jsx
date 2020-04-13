import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setSearch }) => (
  <div className="search-bar">
    <div className="search-bar__container">
      <input
        type="search"
        className="search-bar__container--input input is-centered has-text-centered"
        placeholder="Product name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="search-bar__container--icon" />
    </div>

    <div className="search-bar__select-container">
      <h3 className="search-bar__select-container--label title is-5">Filters</h3>
      <select
        name="filter"
        className="select search-bar__select-container--select"
        onChange={(e) => setSearch(e.target.value)}
      >
        <option value="All">All</option>
        <optgroup label="Color">
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Pink">Pink</option>
        </optgroup>
        <optgroup label="Category">
          <option value="Running">Running</option>
          <option value="Beach">Beach</option>
        </optgroup>
      </select>
    </div>
  </div>
);


SearchBar.propTypes = {
  setSearch: PropTypes.instanceOf(Function).isRequired,
};

export default SearchBar;
