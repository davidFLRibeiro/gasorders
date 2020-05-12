import React, { Component } from 'react';
import orderContext from '../context/orderContext';
import config from '../config';
import './EditOrder.css';

export class EditOrder extends Component {
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
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  static contextType = orderContext;

  handleEditChange(e) {
    const value = e.target.value;
    if (e.target.name === 'delivered')
      this.setState({ delivered: e.target.checked });
    else this.setState({ [e.target.name]: value });
  }

  handleEditOrder = (e) => {
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
      id: this.state.id,
      phone_number: this.state.phone_number,
      street: this.state.street,
      client_name: this.state.client_name,
      post_cod: this.state.post_cod,
      bottle_type: this.state.bottle_type,
      date_deliver: this.state.date_deliver,
      observations: this.state.observations,
      delivered: this.state.delivered,
    };
    const id = this.state.id;
    fetch(`${config.API_ENDPOINT}clients/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
      })
      .then(() => {
        this.context.ordersEdit(order);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const { orderId } = this.props.match.params;
    const orderdatarray = this.context.orders.filter(
      (order) => order.id === parseInt(orderId)
    );

    this.setState({
      id: orderdatarray[0].id,
      phone_number: orderdatarray[0].phone_number,
      street: orderdatarray[0].street,
      client_name: orderdatarray[0].client_name,
      post_cod: orderdatarray[0].post_cod,
      bottle_type: orderdatarray[0].bottle_type,
      date_deliver: orderdatarray[0].date_deliver,
      observations: orderdatarray[0].observations,
      delivered: orderdatarray[0].delivered,
    });
  }

  render() {
    return (
      <div className='editOrder'>
        <h1>Edit Order</h1>
        <form className='orderEdit'>
          <p>only accepts 9 numbers</p>
          {this.state.showError && (
            <p>required and can not have more then 9 digits</p>
          )}
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone_number'
            id='phone'
            placeholder='Phone Number'
            onChange={this.handleEditChange}
            value={this.state.phone_number}
          ></input>
          {this.state.showErrorName && <p>Name is required</p>}
          <br />

          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            name='client_name'
            id='Name'
            placeholder='Name'
            onChange={this.handleEditChange}
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
            onChange={this.handleEditChange}
            value={this.state.street}
          ></input>
          <br />

          {this.state.showErrorPCod && (
            <p>P Cod required and can have only 9 numbers</p>
          )}
          <p>only accepts 5 numbers</p>
          <label htmlFor='PostCod'>P. Cod</label>
          <input
            type='text'
            name='post_cod'
            id='PostCod'
            placeholder='Post Cod'
            onChange={this.handleEditChange}
            value={this.state.post_cod}
          ></input>
          <br />
          {this.state.showErrorDate && <p>Date is required</p>}
          <label htmlFor='Date'>Date</label>
          <input
            type='date'
            id='Date'
            name='date_deliver'
            onChange={this.handleEditChange}
            value={this.state.date_deliver}
          ></input>
          <br />
          {this.state.showErrorType && <p>Type is required</p>}
          <label htmlFor='bottle'>Type</label>
          <input
            type='text'
            name='bottle_type'
            id='Bottle'
            placeholder='Nº and Bottle type'
            onChange={this.handleEditChange}
            value={this.state.bottle_type}
          ></input>
          <br />
          <label htmlFor='Obs'>Obervations:</label>
          <br />
          <textarea
            name='observations'
            form='Obs'
            onChange={this.handleEditChange}
            value={this.state.observations}
          ></textarea>
          <br />
          <label htmlFor='delivered'>Delivered</label>
          <input
            type='checkbox'
            id='check'
            name='delivered'
            onChange={this.handleEditChange}
            value={this.state.delivered}
            checked={this.state.delivered ? 'checked' : ''}
          ></input>
          <br />
          <button type='button' onClick={this.handleEditOrder}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditOrder;
