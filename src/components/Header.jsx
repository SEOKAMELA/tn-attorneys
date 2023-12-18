// Header.jsx
import React from "react";
import "./Header.css";
import image from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header-div">
      <div className="logo-name-div">
        <img src={image} alt="Logo" className="logo-img" />
        <h2 className="logo-name">TN Attornys</h2>
      </div>
      <div className="nav-bar-div">
        <nav>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About Us</a>
            </li>
            <li>
              <a href="/#">Our Services</a>
            </li>
            <li>
              <a href="/#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contacts-div">
      <i class="fa-solid fa-phone"></i> (+27) 10 00650 290 <p></p>
      </div>
    </div>
  );
};

export default Header;
