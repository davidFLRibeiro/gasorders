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
      errorMsg: '',
      showError: false,
      showErrorStreet: false,
      showErrorName: false,
      showErrorPCod: false,
      showErrorType: false,
      showErrorDate: false,
      phoneError: '',
    };
    this.handleAddOrder = this.handleAddOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static contextType = orderContext;

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  //Handle add Order with conditions

  handleAddOrder = (e) => {
    e.preventDefault();
    let showError = false;
    let showErrorDate = false;
    let showErrorName = false;
    let showErrorPCod = false;
    let showErrorStreet = false;
    let showErrorType = false;
    if (
      this.state.phone_number.length === 0 ||
      this.state.phone_number.length > 9
    ) {
      showError = true;
    }
    if (this.state.client_name.length === 0) {
      showErrorName = true;
    }
    if (this.state.street.length === 0) {
      showErrorStreet = true;
    }

    if (this.state.post_cod.length === 0) {
      showErrorPCod = true;
    }
    if (this.state.date_deliver.length === 0) {
      showErrorDate = true;
    }
    if (this.state.bottle_type.length === 0) {
      showErrorType = true;
    }
    if (!/^[0-9\b]+$/.test(this.state.post_cod)) {
      showErrorPCod = true;
    }

    if (!/^[0-9\b]+$/.test(this.state.phone_number)) {
      showError = true;
    }

    if (
      showError ||
      showErrorName ||
      showErrorStreet ||
      showErrorPCod ||
      showErrorDate ||
      showErrorType
    ) {
      this.setState({
        showError,
        showErrorName,
        showErrorStreet,
        showErrorPCod,
        showErrorDate,
        showErrorType,
      });
      return;
    }

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
        this.props.history.push('/OrderHistoric');
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: 'phone number to long' });
      });
  };

  render() {
    return (
      <div className='addOrder'>
        <h1>Add Order </h1>

        <form className='orderAdd'>
          <p>only accepts 9 numbers</p>
          {this.state.showError && <p>required and only numbers </p>}
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
          {this.state.showErrorName && <p>Name is required</p>}
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            name='client_name'
            id='Name'
            placeholder='Name'
            onChange={this.handleChange}
            value={this.state.client_name}
          ></input>
          <br />

          {this.state.showErrorStreet && <p>Street is required</p>}
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
          {this.state.showErrorPCod && <p> Required and only Numbers</p>}
          <p>only accepts 5 numbers</p>

          <label htmlFor='PostCod'>P. Cod</label>
          <input
            type='text'
            name='post_cod'
            id='PostCod'
            placeholder='Post Cod'
            onChange={this.handleChange}
            value={this.state.post_cod}
          ></input>
          <br />
          {this.state.showErrorDate && <p>Date is required</p>}
          <label htmlFor='Date'>Date</label>
          <input
            type='date'
            id='Date'
            name='date_deliver'
            onChange={this.handleChange}
            value={this.state.date_deliver}
          ></input>
          <br />
          {this.state.showErrorType && <p>Type is required</p>}
          <label htmlFor='bottle'>Type</label>
          <input
            type='text'
            name='bottle_type'
            id='bottle'
            placeholder='Nº and Bottle type'
            onChange={this.handleChange}
            value={this.state.bottle_type}
          ></input>
          <br />
          <label htmlFor='Obs'>Observations:</label>
          <br />
          <textarea
            name='observations'
            form='Obs'
            id='Obs'
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
