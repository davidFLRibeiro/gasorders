import React from 'react';
import ReactDOM from 'react-dom';
import Delivers from './delivers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Delivers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
