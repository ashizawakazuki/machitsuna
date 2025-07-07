import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>地域コミュニティイベント管理アプリ</h2>
      <h1>まちつな</h1>
      <p className="description">
      「まちつな」は、地域のイベント情報や、スキル・経験を持つ人々をつなげるアプリです。<br />
      人材の依頼やイベントへの参加を通して、地域の中でのつながりを育むことができます<br />
      気になる人材やイベントは「お気に入り」に登録して、あとからいつでも確認できます。
      </p>

      <div className="card-container">
  <Link to="/talent-bank" className="card">
    <h2 className="card-title">人材バンク</h2>
    <div className="card-content">
      <div className="card-emoji">🧑‍🏫</div>
      <p className="card-text">
      地域で活躍したいスキルや経験を持つ方々が登録されています。<br />
      依頼は管理者を通して行われるため、安心してご利用いただけます。<br />
      また、ご希望の方はどなたでも人材として登録することができます。
      </p>
    </div>
  </Link>

  <Link to="/event-list" className="card">
    <h2 className="card-title">イベント一覧</h2>
    <div className="card-content">
      <div className="card-emoji">📅</div>
      <p className="card-text">
      地域で開催される多種多様なイベントの情報を一覧でご覧いただけます。<br />
      カテゴリーから検索して、興味のあるイベントに参加してみましょう。<br />
      </p>
    </div>
  </Link>

  <Link to="/badge" className="card">
    <h2 className="card-title">称号</h2>
    <div className="card-content">
      <div className="card-emoji">👑</div>
      <p className="card-text">
      人材バンクを通じた依頼・対応や地域イベントへの参加の回数に応じて称号が獲得できます。<br />
      称号は5段階あり、活動の実績がひと目で分かるようになっています。
      </p>
    </div>
  </Link>
</div>
    </div>
  );
};

export default Home;