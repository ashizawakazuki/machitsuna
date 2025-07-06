// src/pages/TalentBank.js
import React, { useState } from 'react';
import './TalentBank.css';

const talentData = [
  { id: 1, name: '佐藤 花子', skill: '子どもの教育相談', category: '教育' },
  { id: 2, name: '鈴木 次郎', skill: '地域歴史の解説', category: '人文・社会科学' },
  { id: 3, name: '高橋 三郎', skill: '科学実験のサポート', category: '自然科学' },
  { id: 4, name: '田中 美咲', skill: 'プログラミング講座', category: '産業・技術' },
  { id: 5, name: '中村 拓也', skill: '絵画・水彩画教室', category: '芸術・文化' },
  { id: 6, name: '山本 純子', skill: '健康体操・ストレッチ', category: 'スポーツ' },
  { id: 7, name: '小林 大地', skill: '家庭菜園の育て方', category: '家庭生活・趣味' },
  { id: 8, name: '渡辺 春香', skill: '手芸や折り紙指導', category: '家庭生活・趣味' },
  { id: 9, name: '松本 海斗', skill: '写真の撮り方講座', category: '芸術・文化' },
  { id: 10, name: '伊藤 真由', skill: '災害時の応急処置', category: 'その他' },
];

const categories = [
  'すべて',
  '教育',
  '人文・社会科学',
  '自然科学',
  '産業・技術',
  '芸術・文化',
  'スポーツ',
  '家庭生活・趣味',
  'その他'
];

const TalentBank = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const itemsPerPage = 5;

  const filteredTalent = selectedCategory === 'すべて'
    ? talentData
    : talentData.filter(talent => talent.category === selectedCategory);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTalent = filteredTalent.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // カテゴリー変更時は1ページ目に戻る
  };

  return (
    <div className="talent-bank-container">
      <h2 className="title">人材バンク一覧</h2>

      {/* カテゴリー選択 */}
      <div className="category-filter">
        <label htmlFor="category">カテゴリーで検索：</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 一覧表示 */}
      {currentTalent.map((talent) => (
        <div key={talent.id} className="talent-card">
          <p><strong>名前：</strong>{talent.name}</p>
          <p><strong>特技・スキル：</strong>{talent.skill}</p>
          <p><strong>カテゴリー：</strong>{talent.category}</p>
          <div className="button-group">
            <button className="detail-button">詳細</button>
            <button className="favorite-button">お気に入り</button>
          </div>
        </div>
      ))}

      {/* ページネーション */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          前へ
        </button>

        {/* ページ番号ボタン */}
        {Array.from({ length: Math.ceil(filteredTalent.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active-page' : ''}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={startIndex + itemsPerPage >= filteredTalent.length}
        >
          次へ
        </button>
      </div>
    </div>
  );
};

export default TalentBank;