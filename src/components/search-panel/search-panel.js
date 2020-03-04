import React from 'react';
import './search-panel.css';

const SearchPanel = ({ onSearchChange, value }) => {
  return <input className="search-input form-control" type="text" placeholder="type to search" value={value} onChange={(e) => onSearchChange(e.target.value)} />;
};

export default SearchPanel;
