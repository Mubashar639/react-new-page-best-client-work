import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import Careers from './pages/careers';

/**
 *
 * page changes router
 * add Route, element react router and pass the props
 * path as page route and element (will co  mponent need to render)
 */

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/career" element={<Careers />} />
    </Routes>
  </div>
);

export default App;
