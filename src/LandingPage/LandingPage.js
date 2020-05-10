import React, { Component } from 'react';
import './LandingPage.css';
import image from '../images/truck.jpg';
import { Link } from 'react-router-dom';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <h1>Gas Orders</h1>

        <h2>Create Request or Deliver Request...</h2>
        <div className='btnRequests'>
          <Link to='/AddOrder'>Add Order</Link>
        </div>
        <div className='btnRequests'>
          <Link to='/Delivers'>Delivers</Link>
        </div>

        <br />
        <img src={image} alt='truck' className='truck' />
      </div>
    );
  }
}

export default LandingPage;
