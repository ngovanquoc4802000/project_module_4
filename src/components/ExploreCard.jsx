
import React from 'react';
import '../styles/components/ExploreCard.scss';
import { FaCommentAlt, FaCamera, FaRegBookmark } from 'react-icons/fa';

const ExploreCard = ({ image, name, address, userAvatar, userName, comment, commentsCount, photosCount }) => {
  return (
    <div className="explore-card">
      <img src={image} alt={image} className="explore-card__image" />
      <div className="explore-card__content">
        <h3 className="explore-card__title">{name}</h3>
        <p className="explore-card__address">{address}</p>
        <div className="explore-card__user">
          <img src={userAvatar} alt={userName} className="explore-card__avatar" />
          <span className="explore-card__username">{userName}</span>
          <span className="explore-card__comment">{comment}</span>
        </div>
        <div className="explore-card__footer">
          <div className="explore-card__stats">
            <span><FaCommentAlt size={12} /> {commentsCount}</span>
            <span><FaCamera size={12} /> {photosCount}</span>
          </div>
          <button className="explore-card__save"><FaRegBookmark size={14} /> Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
