import React, { Component } from 'react';
import './BillingInfo.css';


class BillingInfo extends Component {
  
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

  render() {

    return (
        <div className="BillingInfo">
          <h3>Billing Info Input Here</h3>
        </div>
    );
  }

}
export default BillingInfo;
