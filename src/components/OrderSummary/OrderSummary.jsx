import React, { Component } from 'react';
import './OrderSummary.css';


class OrderSummary extends Component {

  constructor(props) {
    super(props);

    this.back = function(){
        // window.back();
        console.log('back');
    }
  }

  render() {
    return (
        <div className="OrderSummary">
            <h2>Order Summary</h2>
            <section id="order_summary">

                {this.props.cart.items.map((item) =>
                    <div key={item.id} className="item">
                        <strong className="amount">{item.quantity} x ${item.total}</strong>
                        <strong>{item.name}</strong>
                        <br/>
                    </div>
                )}

                <hr />
                <div className="details">
                    <strong>
                        Subtotal:
                        <span id="order-subtotal" className="amount">${this.props.cart.subtotal}</span>
                    </strong>
                    <strong>
                        Shipping:
                        <span id="fulfillment-amount" className="amount">${this.props.cart.shipping}</span>
                    </strong>
                    <strong>
                        Taxes:
                        <span id="order-taxes" className="amount">${this.props.cart.tax}</span>
                    </strong>
                </div>
                <hr />
                <strong className="total">
                    Total
                    <span id="order-total" className="amount">${this.props.cart.total}</span>
                </strong>
            </section>
            <a className="back" onClick={this.back}>Go Back</a>
        </div>
    );
  }
}
export default OrderSummary;
