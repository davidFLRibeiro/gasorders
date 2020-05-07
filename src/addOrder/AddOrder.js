import React, { Component } from 'react';
import orderContext from '../context/orderContext';
import config from '../config';
import './AddOrder.css';

export class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
      street: '',
      client_name: '',
      post_cod: '',
      bottle_type: '',
      date_deliver: '',
      observations: '',
      delivered: '',
      orders: [],
    };
    this.handleAddOrder = this.handleAddOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static contextType = orderContext;

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleAddOrder = (e) => {
    e.preventDefault();

    const order = {
      phone_number: this.state.phone_number,
      street: this.state.street,
      client_name: this.state.client_name,
      post_cod: this.state.post_cod,
      bottle_type: this.state.bottle_type,
      date_deliver: this.state.date_deliver,
      observations: this.state.observations,
      delivered: false,
    };
    fetch(`${config.API_ENDPOINT}clients`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then((data) => {
        this.context.ordersUpdate(data);
        this.props.history.push('/Historic');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.context);
    return (
      <div className='addOrder'>
        <h1>Add Order</h1>
        <form className='order'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone_number'
            id='phone'
            placeholder='Phone Number'
            onChange={this.handleChange}
            value={this.state.phone_number}
          ></input>
          <br />
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            name='client_name'
            id='Name'
            placeholder='Name'
            onChange={this.handleChange}
            value={this.state.client_name}
          ></input>
          <label htmlFor='Street'>Street</label>
          <input
            type='text'
            name='street'
            id='Street'
            placeholder='Street Name'
            onChange={this.handleChange}
            value={this.state.street}
          ></input>
          <br />
          <label htmlFor='PostCod'>Post Cod</label>
          <input
            type='text'
            name='post_cod'
            id='PostCod'
            placeholder='Post Cod'
            onChange={this.handleChange}
            value={this.state.post_cod}
          ></input>
          <label htmlFor='Date'>Date</label>
          <input
            type='date'
            id='Date'
            name='date_deliver'
            onChange={this.handleChange}
            value={this.state.date_deliver}
          ></input>
          <br />
          <label htmlFor='bottle'>bottle type</label>
          <input
            type='text'
            name='bottle_type'
            id='Bottle'
            placeholder='Nº and Bottle type'
            onChange={this.handleChange}
            value={this.state.bottle_type}
          ></input>
          <br />
          <label htmlFor='Obs'>Obervations:</label>
          <br />
          <textarea
            name='observations'
            form='Obs'
            onChange={this.handleChange}
            value={this.state.observations}
          ></textarea>
          <br />
          <button type='button' onClick={this.handleAddOrder}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddOrder;
