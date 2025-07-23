import React, { useState } from 'react';
import '../styles/components/FoodList.scss';

const defaultCategories = [
  'Deal hôm nay',
  'Tất cả',
  'Đồ ăn',
  'Đồ uống',
  'Đồ chay',
  'Bánh kem',
  'Tráng miệng'
];

const extraCategories = [
  'Món Hàn',
  'Món Nhật',
  'Món Trung',
  'Giao nhanh',
  'Ăn sáng',
  'Mì - Phở'
];

const FoodList = ({ selected, onSelect }) => {
  const [showMore, setShowMore] = useState(false);

  const handleCategoryClick = (cat) => {
    if (cat === 'Xem thêm') {
      setShowMore(!showMore);
    } else {
      onSelect(cat);
    }
  };

  return (
    <div className="food-list-tabs">
      {[...defaultCategories, 'Xem thêm'].map((cat) => (
        <button
          key={cat}
          className={cat === selected ? 'active' : ''}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}

      {showMore && (
        <div className="extra-categories">
          {extraCategories.map((cat) => (
            <button
              key={cat}
              className={cat === selected ? 'active' : ''}
              onClick={() => onSelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodList;
