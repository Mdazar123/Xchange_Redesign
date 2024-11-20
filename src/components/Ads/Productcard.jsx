import React from 'react';
import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';
import product_img from '../../assets/image.svg';
import './Product.css';  // Don't forget to create this CSS file

const Productcard = ({product}) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img 
          src={product_img} 
          alt="Water kettle" 
        />
        <Heart className="heart-icon" />
      </div>

      {/* Categories */}
      <div className="categories">
        <span>{product.p_category[0]}</span>
        <span>Other</span>
      </div>

      {/* Title */}
      <h3 className="product-title">
        {product.p_name}
      </h3>

      {/* Location */}
      <div className="location">
        <MapPin className="location-icon" />
        <span>{product.p_place}</span>
      </div>

      {/* Price */}
      <div className="price">
        <span>₹ {product.p_price}</span>
      </div>
    </div>
  );
};

export default Productcard;
