// Header.jsx
import React from 'react';
import './Header.css';
import image from '../assets/images.png';

const Header = () => {
  return (
    <div className='header-div'>
      <div className='logo-name-div'>
        <img src={image} alt='Logo' className='logo-img' />
        <h1 className='logo-name'>Tn Attornys</h1>
      </div>
      <div className='nav-bar-div'>
        <nav>
          <ul>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>About</a></li>
            <li><a href='/#'>Services</a></li>
            <li><a href='/#'>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className='contacts-div'>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Header;
