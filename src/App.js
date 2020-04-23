import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import { Router, Route } from 'react-router-dom';
import AddOrder from './addOrder/AddOrder';
import ClientList from './ClientList/ClientList';
import Historic from './Historic/Historic';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/AddOrder' component={AddOrder} />
        <Route exact path='/ClientList' component={ClientList} />
        <Route exact path='/OrderHistoric' component={Historic} />
      </div>
    );
  }
}

export default App;
