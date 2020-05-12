import React, { Component } from 'react';
import orderContext from '../context/orderContext';
import { Redirect } from 'react-router-dom';
import './delivers.css';

export class Delivers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      orderEdit: 0,
    };
  }
  handleEditOrder = (e) => {
    e.preventDefault();
    this.setState({ redirect: true, orderEdit: e.target.id });
  };

  static contextType = orderContext;
  render() {
    const { orders = [] } = this.context;
    if (this.state.redirect) {
      return <Redirect to={`/EditOrder/${this.state.orderEdit}`} />;
    }

    //filter orders to get a specific order.
    return (
      <section className='delivers_list'>
        <h1>Delivers</h1>
        <ul>
          {orders
            .filter((order) => {
              return order.delivered === false;
            })
            .map((order) => (
              <li
                key={order.id}
                id={order.id}
                onClick={this.handleEditOrder.bind(this)}
              >
                {' '}
                {order.client_name} &nbsp; &nbsp; {order.date_deliver}
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

export default Delivers;
