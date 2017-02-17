import React, { Component } from 'react';
import './Payment.css';


class Payment extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Payment">
        <h2>Payment Information</h2>
        <fieldset>
          <input id="name" placeholder="Name on Card" type="text" />
        </fieldset>
      </div>
    );
  }
}
export default Payment;
