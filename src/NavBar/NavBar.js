import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className='menu'>
        <label htmlFor='menu-toggle'>Menu</label>
        <input type='checkbox' id='menu-toggle' />
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/AddOrder'>AddOrder</Link>
          </li>
          <li>
            <Link to='ClientList'>Client List</Link>
          </li>
          <li>
            <Link to='/OrderHistoric'>Historic</Link>
          </li>
          <li>
            <Link to='/Delivers'>To be Delivered...</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
