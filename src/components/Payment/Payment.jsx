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
        <fieldset>
          <input id="name" placeholder="Name on Card" type="text" />
        </fieldset>
      </div>
    );
  }
}
export default Payment;
