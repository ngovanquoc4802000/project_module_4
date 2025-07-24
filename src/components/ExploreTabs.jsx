import React from 'react';

export default function ExploreTabs({ selectedTab, onSelectTab }) {
  const tabs = ['Mới nhất', 'Gần tôi', 'Đã lưu'];

  return (
    <div className="explore-tabs">
      <div className="explore-tabs-left">
        <div className="explore-tabs-buttons">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onSelectTab(tab)}
              className={selectedTab === tab ? 'active' : ''}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
