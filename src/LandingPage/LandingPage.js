import React, { Component } from 'react';
import './LandingPage.css';
import image from '../images/truck.jpg';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <h1>Gas Orders</h1>
        <h2>Create Request or Deliver Request...</h2>
        <button type='submit' className='btnRequests'>
          Requests
        </button>
        <button type='submit' className='btnDelivers'>
          Delivers
        </button>
        <br />
        <img src={image} alt='truck' className='truck' />
      </div>
    );
  }
}

export default LandingPage;
