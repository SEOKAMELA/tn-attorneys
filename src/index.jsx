import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './views/WelcomePage';
import ImageSlider from './components/ImageSlider';
import SpecilizedIn from './views/SpecilizedIn';
import Policy from './views/Policcy';
import Footer from './views/Footer';
import ServiceRibbon from './components/ServiceRibbon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ServiceRibbon />
    <ImageSlider />
    <WelcomePage />
    <SpecilizedIn /> 
    <Policy /> 
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
