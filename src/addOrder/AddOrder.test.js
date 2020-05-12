import React from 'react';
import ReactDOM from 'react-dom';
import AddOrder from './AddOrder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddOrder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
