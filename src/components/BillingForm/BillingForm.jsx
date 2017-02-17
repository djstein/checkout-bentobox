import React, { Component } from 'react';
import './BillingForm.css';

import BillingInfo from '../BillingInfo/BillingInfo';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import Payment from '../Payment/Payment';


class BillingForm extends Component {
  
  constructor(props) {
    super(props);
    this.inputCheck = this.inputCheck.bind(this);
    this.state = {
    };

  }

  inputCheck() {
    console.log(this);
  }

  render() {

    return (
        <div className="BillingForm">
          <h2>Billing Information</h2>
          <form id="Billing Information">
              <BillingInfo />
              <DeliveryInfo fullfill={this.props.cart.fulfillment_method}/>
              <Payment />
          </form>
        </div>
    );
  }

}
export default BillingForm;
