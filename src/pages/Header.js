// src/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (window.confirm('ログインしますか？')) {
      setIsLoggedIn(true);
    }
  };

  const handleRegister = () => {
    if (window.confirm('新規登録しますか？')) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    if (window.confirm('ログアウトしますか？')) {
      setIsLoggedIn(false);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo-block hover-effect">
          <div className="header-logo"> まちつな</div>
          <div className="header-subtitle">-「まち」と「ひと」をつなぐアプリ-</div>
        </Link>
      </div>

      <div className="header-right">
        {isLoggedIn ? (
          <>
            <Link to="/favorites" className="header-favorite">お気に入りリスト</Link>
            <button onClick={handleLogout} className="header-button">ログアウト</button>
          </>
        ) : (
          <>
            <button onClick={handleLogin} className="header-button">ログイン</button>
            <button onClick={handleRegister} className="header-button">新規登録</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;