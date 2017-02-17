import React, { Component } from 'react';
import './Billing.css';

class Billing extends Component {
  
  constructor(props) {
    super(props);
    this.inputCheck = this.inputCheck.bind(this);
    this.state = {value: ''};

  }

  inputCheck() {
    console.log(this);
  }

  render() {
    return (
        <div className="Billing">
            <form id="Billing Information">
                <h2>Billing Information</h2>
                <fieldset></fieldset>
                <h3>How would you like to receive your order?</h3>
                <div className="radio"></div>
                <div className="radio disabled"></div>
                <div className="radio"></div>
                <div className="error" id="payment-error"></div>
                <fieldset></fieldset>
                <div className="error" id="generic-error"></div>
            </form>
      <div onClick={this.handleClick}>CAT</div>
        </div>
    );
  }

// Billing.propTypes = {

//   };

//   Billing.defaultProps = {

//   };

}
export default Billing;
