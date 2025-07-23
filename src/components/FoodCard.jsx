import React from 'react';

function FoodCard({ image, title, author, address, comments, likes }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{address}</p>
      <p><strong>{author}</strong></p>
      <p>💬 {comments} 💗 {likes}</p>
    </div>
  );
}

export default FoodCard;
