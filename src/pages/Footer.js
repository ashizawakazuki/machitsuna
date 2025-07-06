// src/Footer.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // トップページではフッター非表示（あとで案を変更可能）
  if (location.pathname === '/') return null;

  return (
    <footer className="footer">
      <button
        className={`footer-tab ${location.pathname.includes('/talent-bank') ? 'active' : ''}`}
        onClick={() => navigate('/talent-bank')}
      >
        人材バンク
      </button>
      <button
        className={`footer-tab ${location.pathname.includes('/event-list') ? 'active' : ''}`}
        onClick={() => navigate('/event-list')}
      >
        地域イベント
      </button>
      <button
        className={`footer-tab ${location.pathname.includes('/badge') ? 'active' : ''}`}
        onClick={() => navigate('/badge')}
      >
        称号
      </button>
    </footer>
  );
};

export default Footer;