
import React, { useState } from 'react';
import RestaurantCard from './components/RestaurantCard';
import FoodList from './components/FoodList';
import ExploreCard from './components/ExploreCard';
import ExploreTabs from './components/ExploreTabs';
import ExploreFilters from './components/ExploreFilters';
import ExploreTopFilters from './components/ExploreTopFilters';

import restaurants from './data/restaurants';
import exploreData from './data/explore';

import './styles/base/globals.scss';
import './styles/components/FoodList.scss';
import './styles/components/SectionHeader.scss';
import './styles/components/explore.scss';
import './styles/components/ExploreTabs.scss';
import './styles/components/ExploreTopFilters.scss';
import './styles/components/ExploreFilters.scss';
import './styles/components/ExploreCard.scss';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Deal hôm nay');
  const [selectedTab, setSelectedTab] = useState('Mới nhất');

  return (
    <div className="container">

      {/* Giao tận nơi */}
      <div className="section-header">
        <div className="section-title-tabs">
          <div className="section-title-with-icon">
            <img src="/images/Shopee.png" alt="Shopee Logo" />
            <h2 className="section-title">Giao tận nơi</h2>
          </div>
          <FoodList selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>
      </div>

      <div className="restaurant-grid">
  {restaurants.slice(0, 10).map((res, index) => (
    <RestaurantCard key={index} {...res} />
  ))}
</div>

      {/* Khám phá */}
      <div className="explore-container">

        {/* Header: Khám phá + Tabs + Filters */}
        <div className="explore-header">
          <div className="explore-header-row">
            <div className="explore-left">
              <h2 className="explore-title">Khám phá</h2>
              <ExploreTabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
            </div>
            <div className="explore-top-filters">
              <ExploreTopFilters />
            </div>
          </div>
        </div>

        {/* Dưới: Filter dọc + Thẻ quán ăn */}
        <div className="explore-body">
          <aside className="explore-sidebar">
            <div className="explore-menu">
              <ExploreFilters />
            </div>
          </aside>

          <main className="explore-main">
            <div className="explore-grid">
              {exploreData.map((item, idx) => (
                <ExploreCard key={idx} {...item} />
              ))}
            </div>
          </main>
        </div>

      </div>
    </div>
  );
}

export default App;
