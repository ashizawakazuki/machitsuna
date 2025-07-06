// src/components/Badge.js
import React from 'react';
import './Badge.css';

const titles = [
  { name: '地域デビュー', count: 1, icon: '🔰' },
  { name: 'つながりビギナー', count: 3, icon: '🌱' },
  { name: 'まちづくりプレイヤー', count: 5, icon: '⭐' },
  { name: 'まちのつなぎ手', count: 10, icon: '🏅' },
  { name: 'まちつなマスター', count: 20, icon: '👑' },
];

// 仮に現在の実績が10回だったとする
const userCount = 10;

const Badge = () => {
  return (
    <div className="badge-container">
      <h2 className="badge-title">称号の確認</h2>
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