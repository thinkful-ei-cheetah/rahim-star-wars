import React from 'react';
import Search from './Search/Search';
import Select from './Select/Select';
import BackGroundImage from './BackgroundImage/BackGroundImage';

function App() {
  return (
    <div className='App'>
      <header role='banner' className='App-header'>
        <h1>FAR AWAY SEARCH</h1>
      </header>
      <main role='main'>
        <Search />
        <Select />
        <BackGroundImage />
      </main>
    </div>
  );
}

export default App;
