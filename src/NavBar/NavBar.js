import React, { Component } from 'react';
import { Link, redirect, NavLink } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className='menu'>
        {/*<label htmlFor='menu-toggle'>Menu</label>*/}
        {/*<input type='checkbox' id='menu-toggle' />*/}
        <ul id='menu'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/AddOrder'>Add Order</NavLink>
          </li>
          <li>
            <NavLink to='/ClientList'>Client List</NavLink>
          </li>
          <li>
            <NavLink to='/OrderHistoric'>Order Historic</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
