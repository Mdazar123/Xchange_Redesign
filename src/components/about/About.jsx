import React from 'react'
import './about.css'
import about_img from '../../assets/xphoneimg.png'
const About = () => {
  return (
    <div className="about">
      <div className="about_left">
      <div class="about_card">
        <img src={about_img} alt="about" />

      </div>
      </div>
      <div className="about_right">
        <p>About Us</p>
        <h1><span>Learn More About <br/>Who We Are</span></h1>
        <p>You can use our platform to sell your stuff with trust, and buyers can shop with confidence. We make sure it's safe and easy for everyone. Come and shop with us online!</p>
        <button className='about_button'>Read More</button>

      </div>
    </div>
  )
}

export default About