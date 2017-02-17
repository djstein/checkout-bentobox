import React, { Component } from 'react';
// import axios from 'axios';
import Header from './components/Header/Header';
import OrderSummary from './components/OrderSummary/OrderSummary';
import BillingForm from './components/BillingForm/BillingForm';
import Footer from './components/Footer/Footer';
import './App.css';

import mockdata from './mockdata.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: mockdata
    }
    // this.api = 'https://copenhagenbistro.getbento.com/store/checkout/ef6da073-6542-402c-88ba-a6d9afdbfc16/json'
    // this.api = 'https://copenhagenbistro.getbento.com/store/checkout/ef6da073-6542-402c-88ba-a6d9afdbfc16?help'
    console.log(this.state.data);
  }

  // componentDidMount(){
  //   axios.get(this.api)
  //     .then((result) => {
  //       this.setState({data:result.data});
  //     });
  // }

  render() {
    return (
      <div className="App">
          <Header logo={this.state.data.account.logo} name={this.state.data.account.site.title}/>
          <div className="row">
            <div className="column half">
              <OrderSummary cart={this.state.data.store.cart} />
            </div>
            <div className="column half">
              <BillingForm cart={this.state.data.store.cart}/>
            </div>
          </div>
        <Footer url={this.state.data.account.site.url} domain={this.state.data.account.site.domain}/>
      </div>
    );
  }
}

export default App;