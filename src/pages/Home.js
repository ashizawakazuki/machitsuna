import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>地域コミュニティイベント管理アプリ</h1>
      <p className="description">
        地域のイベント情報やスキルを持つ人を見つけ、参加・交流して称号を獲得しましょう。
      </p>

      <div className="card-container">
        <Link to="/talent-bank" className="card">
          <img src="/images/people.png" alt="人材バンク" />
          <span>人材バンク</span>
        </Link>
        <Link to="/event-list" className="card">
          <img src="/images/calendar.png" alt="イベント一覧" />
          <span>イベント一覧</span>
        </Link>
        <Link to="/titles" className="card">
          <img src="/images/medal.png" alt="称号" />
          <span>称号</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;