import React, { useEffect, useState ,useRef} from "react";
import user1 from '../../assets/user1.jpeg';
import user2 from '../../assets/user2.jpeg';
import user3 from '../../assets/user3.jpeg';
import user4 from '../../assets/user4.jpeg';


import "./seller.css";

const Sellers = () => {
  const sellers = [
    { id: 1, name: "Kishore", joined: "DEC 2023", image: user1 },
    { id: 2, name: "anusha", joined: "DEC 2023", image: user2 },
    { id: 3, name: "Aniket", joined: "DEC 2023", image: user3 },
    { id: 4, name: "Anjali", joined: "DEC 2023", image: user4 },
    { id: 5, name: "kalyan", joined: "DEC 2023", image: user1 },
  ];

  // Duplicate the sellers array for infinite scroll effect
  const duplicatedSellers = [...sellers, ...sellers];

  return (
    <div className="sellers__center">
      <h1 className="sellers__title">Our Trusted Sellers</h1>
      <div className="sellers__slider">
        <div className="sellers__items">
          {duplicatedSellers.map((seller, index) => (
            <div className="sellers__item" key={`${seller.id}-${index}`}>
              <img
                src={seller.image}
                alt={seller.name}
                className="sellers__image"
              />
              <h3 className="sellers__name">{seller.name}</h3>
              <p className="sellers__joined">
                Seller Since: <span>{seller.joined}</span>
              </p>
              <button className="sellers__trust-index-btn">Trust Index</button>
              <button className="sellers__profile-btn">View Seller Profile</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
