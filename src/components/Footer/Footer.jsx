import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="Footer">
              <footer>

            <div className="row">
                <div className="column">
                    <a href="#" data-featherlight="#refund">Refund Policy</a>
                      |  
                    <a href="http://getbento.com/terms" target="_blank">Terms of Service</a>
                      |  
                    <a href="http://getbento.com/privacy" target="_blank">Privacy Policy</a>
                      |  
                    <a href={this.props.url}>{this.props.domain}</a>
                </div>
            </div>
            </footer>
        </div>
    );
  }
}
export default Footer;
