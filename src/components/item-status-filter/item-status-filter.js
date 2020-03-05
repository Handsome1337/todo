import React from 'react';

const BUTTONS = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const buttons = BUTTONS.map(({name, label}) => {
    const isActive = filter === name;
    const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

    return (
      <button className={`btn ${clazz}`} type="button" key={name} onClick={() => onFilterChange(name)}>{label}</button>
    );
  })

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default ItemStatusFilter;
