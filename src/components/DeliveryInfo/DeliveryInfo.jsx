import React, { Component } from 'react';
import './DeliveryInfo.css';


class DeliveryInfo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fullfill_type: this.props.fullfill
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (event) {
    const target=event.target;
    this.props.updateState(target);
  }


    bringThisUp() {
      if (this.state.fullfill_type==='shipped') {
        return (
          <div>
            <h3>Shipped</h3>
          </div>
        );
      } else if (this.state.fullfill_type==='pickup_only') {
        return (
          <div>
            <h3>Pickup Only</h3>
          </div>
        );
      } else if (this.state.fullfill_type==='delivery') {
        return (
          <div>
            <h3>Delivery Information</h3>
            <label class="checkbox-label" for="delivery_same_as_billing" id="add_delivery">
            <input name="delivery_same_as_billing" id="delivery_same_as_billing" checked="" type="checkbox" />
            Delivery address is the same as billing address</label>
            <fieldset>
            <div className="split">
<input className="split-left" onChange={this.handleInputChange} name="cc_expiry" placeholder="Delievery/Pickup" type="text" />
            <input  className="split-right"onChange={this.handleInputChange} name="cc_cvc" placeholder="Delivery/Pickup Time" type="text" />
            </div>
            </fieldset>
          </div>
        );
      }
    }

  render() {

    return (
        <div className="DeliveryInfo">
          <h3>How would you like to receive your order?</h3>
          <label><input value="delivery" checked="" name="fulfillment_method" type="radio" />Local Delivery</label>
          {this.bringThisUp()}
        </div>
    );
  }

}
export default DeliveryInfo;
