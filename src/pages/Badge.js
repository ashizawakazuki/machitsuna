import React from 'react';
import './styles/Badge.css';

const titles = [
  { name: '地域デビュー', count: 1, icon: '🔰' },
  { name: 'つながりビギナー', count: 3, icon: '🌱' },
  { name: 'まちづくりプレイヤー', count: 5, icon: '⭐' },
  { name: 'まちのつなぎ手', count: 10, icon: '🏅' },
  { name: 'まちつなマスター', count: 20, icon: '👑' },
];

// 仮に現在の実績が10回だったとする
const userCount = 10;

// 現在の称号を判定（最も高い達成済みのものを取得）
const currentTitle = [...titles].reverse().find(title => userCount >= title.count);

const Badge = () => {
  return (
    <div className="badge-container">
      <h2 className="badge-title">称号の確認</h2>

      <p className="user-count-text">
        あなたが現在、地域コミュニティに参加した回数は
        <span className="user-count-number">{userCount}回</span>
        です。
      </p>

      {/* 現在の称号表示 */}
      {currentTitle && (
        <p className="current-title-text">
          現在の称号は
          <span className="current-title-name">
            {currentTitle.icon} {currentTitle.name}
          </span>
          です。
        </p>
      )}

      <div className="badge-list">
        {titles.map((title, index) => {
          const achieved = userCount >= title.count;

          return (
            <div key={index} className="badge-item">
              <div className={`badge-icon ${achieved ? 'achieved' : 'not-achieved'}`}>
                {achieved ? title.icon : 'ー'}
              </div>
              <div className="badge-name">{title.name}</div>
              <div className="badge-condition">{title.count}回で達成</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Badge;