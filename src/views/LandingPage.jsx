import React, { Component } from 'react'
import "./LandingPage.css"

export class LandingPage extends Component {
  render() {
    return (
      <div className='content-div'>
        <h1 className='heading'>
            TN Attorneys
        </h1>
        <p className='parahrap'>
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been psum passages, and
         more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className='qoute-btn'>
            get a quote
        </button>
      </div>
    )
  }
}

export default LandingPage