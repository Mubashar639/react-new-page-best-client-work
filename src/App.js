import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import Otherpage from './pages/otherpage';

/**
 *
 * page changes router
 * add Route, element react router and pass the props
 * path as page route and element (will component need to render)
 */

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/other-page" element={<Otherpage />} />
    </Routes>
  </div>
);

export default App;
