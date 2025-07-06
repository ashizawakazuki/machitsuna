// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TalentBank from './pages/TalentBank';
import TalentDetail from './pages/TalentDetail';
import EventList from './pages/EventList';

// import Titles from './pages/Titles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent-bank" element={<TalentBank />} />
        <Route path="/talent-bank/:id" element={<TalentDetail />} />
        <Route path="/event-list" element={<EventList />} />
        {/* <Route path="/titles" element={<Titles />} /> */}
        {/* 今後ここに他の画面も追加予定 */}
      </Routes>
    </Router>
  );
}

export default App;