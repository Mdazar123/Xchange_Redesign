import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { FaArrowUp } from "react-icons/fa6";
import './Hero.css';
import hero_img from '../../assets/xchero_enhanced.png';

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js';
    script.async = true;
    
    script.onerror = () => {
      console.error('Failed to load finisher-header script');
    };
    
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader(
          {
            "count": 120,
            "size": {
              "min": 2,
              "max": 11,
              "pulse": 0
            },
            "speed": {
              "x": {
                "min": 0,
                "max": 1
              },
              "y": {
                "min": 0,
                "max": 0.6
              }
            },
            "colors": {
              "background": "#c378e8",
              "particles": [
                "#f9fb7b",
                "#86dafb",
                "#fbc08d"
              ]
            },
            "blending": "overlay",
            "opacity": {
              "center": 1,
              "edge": 0
            },
            "skew": -15,
            "shapes": [
              "c"

            ]
          }
        );
      } else {
        console.error('FinisherHeader not found');
      }
    };
    
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="hero">
        <Navbar />
      <div className="header">
        <div className="finisher-header">
          <div className="hero-right">
            <p>Your Products our Trust</p>
            <h1><span>Buy and Sell with Ease and Trust.</span></h1>
            <p>Connecting local buyers and sellers on Xchange!</p>
            <button className="start_button">Get Started</button>

          </div>
          <div className="hero-left">
            <img src={hero_img} alt="hero" />
          </div>
        </div>
      </div>
      {showButton && (
        <button 
          className="sticky_button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Hero;
