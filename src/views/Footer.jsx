import React, { Component } from 'react';
import './Footer.css'; // Import the CSS file

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="content">
          <div className="left-div">
            <p>Left Content</p>
          </div>
          <div className="right-div">
            <p>Right Content</p>
          </div>
        </div>
        <div className="copy-right">
          &copy; 2023 Your Company Name
        </div>
      </div>
    );
  }
}

export default Footer;
