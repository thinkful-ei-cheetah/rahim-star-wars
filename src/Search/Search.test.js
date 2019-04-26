import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

describe('Search', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(div, <Search />);
    ReactDOM.unmountComponentAtNode(div);
  });
});
