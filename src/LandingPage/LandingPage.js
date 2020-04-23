import React, { Component } from 'react';
import './LandingPage.css';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <h1>Gas Orders</h1>
        <h2>Create Request or Deliver Request...</h2>
        <button type='submit'>Requests</button>
        <button type='submit'>Delivers</button>
      </div>
    );
  }
}

export default LandingPage;
