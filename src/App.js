// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import TalentBank from './pages/TalentBank';
import TalentDetail from './pages/TalentDetail';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';
import Badge from './pages/Badge';
import Footer from './pages/Footer';
import Favorites from './pages/Favorites';


// import Titles from './pages/Titles';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent-bank" element={<TalentBank />} />
        <Route path="/talent-bank/:id" element={<TalentDetail />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/event-list/:id" element={<EventDetail />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;