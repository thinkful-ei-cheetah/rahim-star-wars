import React from 'react';

const Search = () => {
  return (
    <section role='region' class='search-bar'>
      <form className='search-form'>
        <label htmlFor='search' />
        <input
          type='text'
          name='search'
          placeholder='Luke Skywalker'
          className='searchbox'
        />
        <button type='Submit' className='search-button'>
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
