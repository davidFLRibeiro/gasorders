import React, { Component } from 'react';
import orderContext from '../context/orderContext';
import { Redirect } from 'react-router-dom';

export class delivers extends Component {
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
    return (
      <section className='order_list'>
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
                {order.client_name} {'  '} {order.date_deliver}
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

export default delivers;