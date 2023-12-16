import React, { Component } from 'react';
import './SpecilizedIn.css'; // Import your CSS file

export class SpecilizedIn extends Component {
  render() {
    return (
      <div className="specilized-container">
        <h1>Specialized In</h1>
        <div className="cards-div">
          <div className="card">
            <div className="card-header">
              <i className="fas fa-cogs"></i> {/* Icon for the card */}
              <h2>Family dispute</h2> {/* Heading */}
            </div>
            <p>Definition of Service 1.</p>
            <div className="more-info">
              <span>More Info</span>
              <i className="fas fa-arrow-right"></i> {/* Right arrow for more info */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <i className="fas fa-chart-bar"></i> {/* Icon for the card */}
              <h2>Labour law</h2> {/* Heading */}
            </div>
            <p>Definition of Service 2.</p>
            <div className="more-info">
              <span>More Info</span>
              <i className="fas fa-arrow-right"></i> {/* Right arrow for more info */}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <i className="fas fa-code"></i> {/* Icon for the card */}
              <h2>Road accidents</h2> {/* Heading */}
            </div>
            <p>Definition of Service 3.</p>
            <div className="more-info">
              <span>More Info</span>
              <i className="fas fa-arrow-right"></i> {/* Right arrow for more info */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecilizedIn;
