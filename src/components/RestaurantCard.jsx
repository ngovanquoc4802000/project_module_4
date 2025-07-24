import React from 'react';
import '../styles/components/RestaurantCard.scss';

function RestaurantCard({ image, name, address, tag }) {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <div className="address">{address}</div>
        <div className="tag">
          <i className="fa fa-tag" aria-hidden="true"></i>
          <span>{tag}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;