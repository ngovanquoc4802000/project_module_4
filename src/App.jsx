import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import UserPage from './pages/UserPage';
import FoodPage from './pages/FoodPage';
import Dashboard from './pages/Dashboard';

import './styles/AdminLayout.scss'; //

function App() {
  return (
    <Router>
      <div className="admin-layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/" element={<CategoryPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/food" element={<FoodPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
