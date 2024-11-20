import React from 'react'
import './footer.css'
import { CiMail } from "react-icons/ci";
import logo from '../../assets/xlogo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="footer_left">
          <div className="footer_item footer_about">
            <h3>About</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer_item footer_links">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Explore Ads</a>
              </li>
            </ul>
          </div>
          <div className="footer_item footer_help">
            <h3>Help&Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer_item footer_support">
            <h3>Support</h3>
            <p>Be the first one to know about discounts, offers and events. Unsubscribe whenever you like.</p>
            <div className="footer_connect">
              <CiMail className='footer_icon' />
              <input type="email" placeholder='Enter your email' />
              <button>Subscribe</button>
            </div>
            <div className="footer_socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer_bottom_right">
          <p>Copyright © Xchange, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer