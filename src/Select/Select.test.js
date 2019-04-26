import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

describe('Search', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(div, <Select />);
    ReactDOM.unmountComponentAtNode(div);
  });
});
