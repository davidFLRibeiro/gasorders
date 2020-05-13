import React, { Component } from 'react';
import './LandingPage.css';
import image from '../images/truck.jpg';
import { Link } from 'react-router-dom';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <h1>Gas Orders</h1>

        <h2>
          This app "gas orders", the user can add orders. When adding the
          distributor user can change the order info or change to the order too
          delivered. Creates a history of gas deliveries and customer orders. To
          add an order press "Add Order", to see orders in distribution press
          "deliveries" In the Menu the user can see add orders and see
          deliveries, there is also a list of customers and history
        </h2>
        <div className='btnRequests'>
          <Link to='/AddOrder'>Add Order</Link>
        </div>
        <div className='btnRequests'>
          <Link to='/Delivers'>Deliveries</Link>
        </div>

        <br />
        <img src={image} alt='truck' className='truck' />
      </div>
    );
  }
}

export default LandingPage;
