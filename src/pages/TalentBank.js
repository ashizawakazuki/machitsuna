// src/pages/TalentBank.js
import React, { useState } from 'react';
import './styles/TalentBank.css';
import { Link } from 'react-router-dom';
import talentData from './data/talentData';
import categoryList from './data/categoryData';

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

      {/* 追加：登録ボタン */}
      <div className="register-button-container">
        <button className="register-button">人材バンクに登録する</button>
      </div>

      {/* カテゴリー選択 */}
      <div className="category-filter">
        <label htmlFor="category">カテゴリーで検索：</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categoryList.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 一覧表示 */}
      {currentTalent.map((talent) => (
  <div key={talent.id} className="talent-card">
    {/* 追加：カードのタイトル表示 */}
    <h3 className="talent-title">{talent.name}さん</h3>
    <div className="talent-content">
      <p><strong>特技・スキル：</strong>{talent.skill}</p>
      <p><strong>カテゴリー：</strong>{talent.category}</p>
      <div className="button-group">
        <button className="detail-button">
          <Link to={`/talent-bank/${talent.id}`} style={{ color: 'white', textDecoration: 'none' }}>
            詳細
          </Link>
        </button>
        <button className="favorite-button" onClick={() => alert('お気に入りに追加しました')}>
          お気に入り
        </button>
      </div>
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