import React from 'react';
import adimg from '../../assets/xads.png';
import Productcard from './Productcard.jsx';
import product_img from '../../assets/image.svg';
import product_data from '../../assets/product_data.js';
import './Ads.css';

const Ads = () => {
  return (
    <div className="popular_ads">
      <h1>Popular Ads</h1>
      <div className="ads_container">
        {product_data.map((product) => (
          <Productcard key={product.p_id} product={product}  />
        ))}
      </div>
      <button className='browse_button'>Browse All</button>
    </div>
  );
};

export default Ads;
