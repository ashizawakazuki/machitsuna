import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/') return null;

  return (
    <footer className="footer">
  <button
    className={`footer-tab ${location.pathname.includes('/talent-bank') ? 'active' : ''}`}
    onClick={() => navigate('/talent-bank')}
  >
    <div className="footer-icon">🧑‍🏫</div>
    <div className="footer-label">人材バンク</div>
  </button>
  <button
    className={`footer-tab ${location.pathname.includes('/event-list') ? 'active' : ''}`}
    onClick={() => navigate('/event-list')}
  >
    <div className="footer-icon">📅</div>
    <div className="footer-label">地域イベント</div>
  </button>
  <button
    className={`footer-tab ${location.pathname.includes('/badge') ? 'active' : ''}`}
    onClick={() => navigate('/badge')}
  >
    <div className="footer-icon">👑</div>
    <div className="footer-label">称号</div>
  </button>
</footer>
  );
};

export default Footer;