import React from 'react';

const Select = () => {
  return (
    <section role='region' class='options-list'>
      <label htmlFor='category-select' />
      <select name='category-select' id='category-select'>
        <option value='people'>People</option>
        <option value='people'>Films</option>
        <option value='people'>Starships</option>
        <option value='people'>Vehicles</option>
        <option value='people'>Species</option>
        <option value='people'>Planets</option>
      </select>
    </section>
  );
};

export default Select;
