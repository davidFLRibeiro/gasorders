import React, { Component } from 'react';
import './Historic.css';

export class Historic extends Component {
  render() {
    return (
      <div className='Historic'>
        <header>
          <h1>Historic</h1>
        </header>
        <table>
          <tr>
            <th>Phone Nº</th>
            <th>Name</th>
            <th>Street</th>
            <th>Post Cod</th>
            <th>bottle</th>
          </tr>
          <tr>
            <td>910465135</td>
            <td>Marisa</td>
            <td>1st street</td>
            <td>9500</td>
            <td>13kg</td>
          </tr>
          <tr>
            <td>910465135</td>
            <td>Jhon</td>
            <td>1st street</td>
            <td>9500</td>
            <td>55kg</td>
          </tr>
          <tr>
            <td>910465135</td>
            <td>Jose</td>
            <td>1st street</td>
            <td>9500</td>
            <td>12kg</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Historic;
