// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    if (window.confirm('ログインしますか？')) {
      setIsLoggedIn(true);
      setMenuOpen(false);
    }
  };

  const handleRegister = () => {
    if (window.confirm('新規登録しますか？')) {
      setIsLoggedIn(true);
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm('ログアウトしますか？')) {
      setIsLoggedIn(false);
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo-block hover-effect">
          <div className="header-logo">まちつな</div>
          <div className="header-subtitle">-「まち」と「ひと」をつなぐアプリ-</div>
        </Link>
      </div>

      {/* 通常表示（PC用） */}
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

      {/* ハンバーガーアイコン（モバイル用） */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="mobile-menu">
          {isLoggedIn ? (
            <>
              <Link to="/favorites" className="header-favorite" onClick={() => setMenuOpen(false)}>お気に入りリスト</Link>
              <button onClick={handleLogout} className="header-button">ログアウト</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin} className="header-button">ログイン</button>
              <button onClick={handleRegister} className="header-button">新規登録</button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;