import React, { useState } from 'react';
import logo from '../../assets/mainlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    'Mobiles',
    'Electronics',
    'Vehicles',
    'Home & Living',
    'Essentials',
    'Furniture',
    'Properties',
    'Home Appliance'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img src={logo} alt="" className='xlogo' />

        {/* Categories Dropdown */}
        <div className="categories-dropdown">
          <button 
            className="categories-btn"
            onClick={() => setShowCategories(!showCategories)}
          >
            Categories
            <span className="arrow-down">▼</span>
          </button>
          {showCategories && (
            <div className="dropdown-content">
              {categories.map((category, index) => (
                <a key={index} href="#">
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search items..."
            className="search-input"
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Ads</a>
        </div>

        {/* Right Section */}
        <div className="nav-right">
          <div className="notifications">
            <i className="notification-icon">🔔</i>
            <span className="notification-badge">3</span>
          </div>
          <div className="cart-icon">
            <i className="cart-icon">🛒</i>
          </div>
          <a href="#" className="post-ad-btn">
            Post Ad
          </a>
          <a href="#" className="signin-btn">
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;