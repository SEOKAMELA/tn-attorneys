// WelcomePage.js

import React, { Component } from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className='welcome-container'>
        <div className='left-div'>
          <h2>Welcome to Our Website!</h2>
          <p>
            Thank you for visiting our website. We are dedicated to providing you with the best
            experience and valuable information.
          </p>
        </div>
        <div className='right-div'>
          <div className='form-card'>
            <h2>Form Title</h2>
            <form>
              <label>
                <input type='text' name='name' placeholder='Name' />
              </label>
              <label>
                <input type='email' name='email' placeholder='Email' />
              </label>
              <label>
                <input type='tel' name='phone' placeholder='Phone' />
              </label>
              <label>
                <textarea name='message' placeholder='Message'></textarea>
              </label>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
