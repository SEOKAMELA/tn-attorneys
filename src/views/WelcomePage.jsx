import React, { Component } from 'react';
import './WelcomePage.css'; // Import a separate CSS file for styling

class WelcomePage extends Component {
  render() {
    return (
      <div className='welcome-container'>
        <div className='left-div'>Left Content Goes Here</div>
        <div className='right-div'>Right Content Goes Here</div>
      </div>
    );
  }
}

export default WelcomePage;
