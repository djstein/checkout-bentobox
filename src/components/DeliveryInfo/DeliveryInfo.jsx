import React, { Component } from 'react';
import './DeliveryInfo.css';


class DeliveryInfo extends Component {
  
  constructor(props) {
    super(props);
    this.inputCheck = this.inputCheck.bind(this);
    this.state = {
      fullfill_type: this.props.fullfill
    };
  }

  inputCheck() {
    console.log(this);
  }


    bringThisUp() {
      if (this.state.fullfill_type==='shipped') {
        return (
          <h2>Shipped</h2>
        );
      } else if (this.state.fullfill_type==='pickup_only') {
        return (
          <h2>Pickup Only</h2>
        );
      } else if (this.state.fullfill_type==='delivery') {
        return (
          <h2>Delivery</h2>
        );
      }
    }

  render() {

    return (
        <div className="DeliveryInfo">
          <h3>How would you like to receive your order?</h3>
          {this.bringThisUp()}
        </div>
    );
  }

}
export default DeliveryInfo;
