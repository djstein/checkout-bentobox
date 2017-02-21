import React, { Component } from 'react';
import './BillingForm.css';

import BillingInfo from '../BillingInfo/BillingInfo';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import Payment from '../Payment/Payment';


class BillingForm extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      billing_street_address_1: null,
      billing_street_address_2: null,
      billing_city: null,
      billing_state: null,
      billing_postal_code: null,
      billing_phone_number: null,
      email: null,
      fulfillment_method: null,
      cc_name: null,
      cc_number: null,
      cc_expiry: null,
      cc_cvc: null
    };

    this.updateState=this.updateState.bind(this);
    this.validateInfo=this.validateInfo.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  updateState (target) {
    const value=target.type === 'checkbox' ? target.checked : target.value;
    const name=target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  validateInfo () {
    console.log('test');
    for(var key in this.state){
      if(this.state.hasOwnProperty(key)){
        console.log(this.state[key]);
        
      }
    }
    return true;
  }

  handleSubmit (event) {
    event.preventDefault();
    this.validateInfo();
  }

  render() {
    return (
        <div className="BillingForm">
          <h2>Billing Information</h2>
          <form id="Billing Information">
              <BillingInfo updateState={this.updateState} />
              <DeliveryInfo updateState={this.updateState} fullfill={this.props.cart.fulfillment_method} />
              <Payment updateState={this.updateState} />
              
              <div className="error" id="generic-error"></div>

              <button onClick={this.handleSubmit} id="processOrder" type="submit">
                <span>Complete Purchase</span>
                <div className="spinner"></div>
              </button>
              
          </form>
        </div>
    );
  }

}
export default BillingForm;
