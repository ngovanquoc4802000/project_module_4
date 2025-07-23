import React, { useState } from 'react';
import ExploreTabs from './components/ExploreTabs';
import ExploreTopFilters from './components/ExploreTopFilters';
import ExploreFilters from './components/ExploreFilters';
import ExploreCard from './components/ExploreCard';
import exploreData from './data/explore';

export default function ExplorePage() {
  const [selectedTab, setSelectedTab] = useState('Mới nhất');

  return (
    <div className="explore-container">
      {/* Tiêu đề + Tabs + Dropdown cùng hàng */}
      <div className="explore-top-bar">
        <h2 className="explore-title">Khám phá</h2>
        <ExploreTabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
        <ExploreTopFilters />
      </div>

      <div className="explore-body">
        <ExploreFilters />
        <div className="explore-results">
          {exploreData.map((item) => (
            <ExploreCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}