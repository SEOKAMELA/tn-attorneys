import React, { Component } from 'react';
import image1 from '../assets/image.png';
import image2 from '../assets/istockphoto-1447689207-2048x2048.jpg';
import image3 from '../assets/istockphoto-1492247375-2048x2048.jpg';


import './ImageSlider.css'; 
import LandingPageContent from '../views/LandingPage';

class ImageSlider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [image1, image2, image3],
        currentImageIndex: 0,
        clickedButtonIndex: null,
      };
    }
  
    componentDidMount() {
      this.startSlideshow();
    }
  
    componentWillUnmount() {
      this.stopSlideshow();
    }
  
    startSlideshow = () => {
      this.intervalId = setInterval(this.scrollImages, 6000); // Auto-scroll every 3 seconds
    };
  
    stopSlideshow = () => {
      clearInterval(this.intervalId); // Clear the interval
    };
  
    scrollImages = () => {
      this.setState((prevState) => ({
        currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length,
      }));
    };
  
    handleButtonClick = (index) => {
      this.stopSlideshow(); // Stop the slideshow
      this.setState((prevState) => ({
        currentImageIndex: index,
        clickedButtonIndex: prevState.clickedButtonIndex === index ? null : index,
      }), () => {
        this.startSlideshow(); // Restart the slideshow
      });
    };
  
    render() {
      const { images, currentImageIndex, clickedButtonIndex } = this.state;
  
      return (
        <div className="image-slider-container">
          <div className="top-left">
            <LandingPageContent />
          </div>
          <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
          <div className="button-container">
            {images.map((_, index) => (
              <button
                key={index}
                className={index === clickedButtonIndex ? 'active' : ''}
                onClick={() => this.handleButtonClick(index)}
              />
            ))}
          </div>
          <div className="top-right">

          </div>
        </div>
      );
    }
  }

export default ImageSlider;
