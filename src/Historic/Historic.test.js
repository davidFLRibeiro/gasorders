import React from 'react';
import ReactDOM from 'react-dom';
import Historic from './Historic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Historic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
