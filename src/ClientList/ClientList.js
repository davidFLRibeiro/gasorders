import React, { Component } from 'react';
import './ClientList.css';

export class ClientList extends Component {
  render() {
    return (
      <div className='Clients'>
        <header>
          <h1>Client List</h1>
        </header>
        <table>
          <tr>
            <th>Phone Nº</th>
            <th>Name</th>
            <th>Street</th>
            <th>Post Cod</th>
          </tr>
          <tr>
            <td>914654845</td>
            <td>Marisa</td>
            <td>1st street</td>
            <td>9500</td>
          </tr>
          <tr>
            <td>998797988</td>
            <td>Jhon</td>
            <td>1st street</td>
            <td>9500</td>
          </tr>
          <tr>
            <td>912132353</td>
            <td>Jose</td>
            <td>1st street</td>
            <td>9500</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ClientList;
