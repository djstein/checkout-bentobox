import React, { Component } from 'react';
import './BillingInfo.css';


class BillingInfo extends Component {
  
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
        <div className="BillingInfo">
          <fieldset>
            <input onChange={this.handleInputChange} name="billing_street_address_1" placeholder="Billing Address 1" type="text" />
            <input onChange={this.handleInputChange} name="billing_street_address_2" placeholder="Billing Address 2" type="text" />
            <input onChange={this.handleInputChange} name="billing_city" placeholder="City" type="text" />
            <div className="split">
              <input className="split-left" onChange={this.handleInputChange} name="billing_state" placeholder="State" type="text" />
              <input className="split-right" onChange={this.handleInputChange} name="billing_postal_code" placeholder="Zip Code" type="text" />
            </div>
            <input onChange={this.handleInputChange} name="billing_phone_number" placeholder="Phone number" type="text" />
            <input onChange={this.handleInputChange} name="email" placeholder="Email address" type="text" />
          </fieldset>
        </div>
    );
  }

}
export default BillingInfo;
