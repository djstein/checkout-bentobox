import React, { Component } from 'react';
import './Payment.css';


class Payment extends Component {

  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (event) {
    const target=event.target;
    this.props.updateState(target);
  }

  render() {
    return (
      <div className="Payment">
        <h2>Payment Information</h2>
        <fieldset>
          <input onChange={this.handleInputChange} name="cc_name" placeholder="Name on Card" type="text" />
          <input onChange={this.handleInputChange} name="cc_number" placeholder="Card Number" type="text" />
          <div className="split">
            <input className="split-left" onChange={this.handleInputChange} name="cc_expiry" placeholder="MM/YY" type="text" />
            <input  className="split-right"onChange={this.handleInputChange} name="cc_cvc" placeholder="CVC" type="text" />
          </div>
        </fieldset>
      </div>
    );
  }
}
export default Payment;
