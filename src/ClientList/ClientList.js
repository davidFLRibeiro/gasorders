import React, { Component } from 'react';
import './ClientList.css';
import orderContext from '../context/orderContext';

export class ClientList extends Component {
  static contextType = orderContext;

  render() {
    const { clients = [], orders = [] } = this.context;

    return (
      <div className='Clients'>
        <h1>Client List</h1>
        <ul>
          {clients.map((phoneN, index) => {
            let orderList = orders.filter((order) => {
              return order.phone_number === phoneN.phone_number;
            });

            return (
              <li key={index}>
                {orderList[0].client_name} &nbsp; &nbsp;{orderList[0].street}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ClientList;
