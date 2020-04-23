import React, { Component } from 'react';
import './AddOrder.css';

export class AddOrder extends Component {
  render() {
    return (
      <div className='addOrder'>
        <h1>Add Order</h1>
        <form className='order'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Phone Number'
          ></input>
          <br />
          <label htmlFor='Name'>Name</label>
          <input type='text' name='Name' id='Name' placeholder='Name'></input>
          <label htmlFor='Street'>Street</label>
          <input
            type='text'
            name='Street'
            id='Street'
            placeholder='Street Name'
          ></input>
          <br />
          <label htmlFor='PostCod'>Post Cod</label>
          <input
            type='text'
            name='PostCod'
            id='PostCod'
            placeholder='Post Cod'
          ></input>
          <label htmlFor='Date'>Date</label>
          <input type='date' id='Date' name='Date'></input>
          <br />
          <label htmlFor='bottle'>bottle type</label>
          <select id='bottles'>
            <option value='12kg'>12 kg</option>
            <option value='13kg'>13 kg</option>
            <option value='55kg'>55 kg</option>
          </select>
          <br />
          <label htmlFor='Obs'>Obervations:</label>
          <br />
          <textarea name='Obs' form='Obs'></textarea>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddOrder;
