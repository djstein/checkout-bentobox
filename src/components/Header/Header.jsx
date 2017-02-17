import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header">
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
            <title>{this.props.name} - Checkout</title>
            <img src={'https:' + this.props.logo} alt="logo"/>
            <h2>Checkout</h2>
        </div>
    );
  }
}
export default Header;