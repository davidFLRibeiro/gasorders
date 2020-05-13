import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import AddOrder from './addOrder/AddOrder';
import ClientList from './ClientList/ClientList';
import Historic from './Historic/Historic';
import orderContext from './context/orderContext';
import config from './config';
import './App.css';
import EditOrder from './EditOrder.js/EditOrder';
import delivers from './delivers/delivers';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      clients: [],
    };
  }

  async componentDidMount() {
    try {
      let [orders, clients] = await Promise.all([
        fetch(`${config.API_ENDPOINT}clients`).then((response) =>
          response.json()
        ),
        fetch(`${config.API_ENDPOINT}clients/clientid`).then((response) =>
          response.json()
        ),
      ]);

      this.setState({ orders, clients });
    } catch (err) {
      console.warn(err);
    }
  }

  ordersUpdate = (data) => {
    this.setState((orders) => {
      const updateOrder = this.state.orders.push(data);
      return {
        updateOrder,
      };
    });
  };

  ordersEdit = (data) => {
    const editOrder = this.state.orders.map((order) => {
      if (order.id === data.id) {
        return data;
      } else {
        return order;
      }
    });
    this.setState({ orders: editOrder });
  };

  render() {
    const orderList = {
      orders: this.state.orders,
      ordersUpdate: this.ordersUpdate,
      ordersEdit: this.ordersEdit,
      clients: this.state.clients,
    };

    return (
      <orderContext.Provider value={orderList}>
        <div>
          <NavBar />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/AddOrder' component={AddOrder} />
          <Route exact path='/ClientList' component={ClientList} />
          <Route exact path='/OrderHistoric' component={Historic} />
          <Route exact path='/EditOrder/:orderId' component={EditOrder} />
          <Route exact path='/Delivers' component={delivers} />
        </div>
      </orderContext.Provider>
    );
  }
}

export default App;
