import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import '../styles/components/ExploreFilters.scss';

const filterItems = [
  'Ở đâu',
  'Giao hàng',
  'Ăn gì',
  'Sưu tập',
  'TV',
  'Bình luận',
  'Blogs',
  'Khuyến mãi'
];

export default function ExploreFilters() {
  return (
    <ul className="explore-filters">
      {filterItems.map((item, idx) => (
        <li key={idx} className="explore-filter-item">
          <button>
            <span className="label">{item}</span>
            <FaChevronRight className="arrow-icon" />
          </button>
        </li>
      ))}
    </ul>
  );
}
