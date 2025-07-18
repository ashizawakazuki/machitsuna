import React, { useState } from 'react';
import './styles/EventList.css';
import { Link } from 'react-router-dom';
import categoryData from './data/categoryData';
import eventData from './data/eventData';

// 日付を整形（曜日付き）
const formatDateWithWeekday = (isoString) => {
  const date = new Date(isoString);
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  const day = weekdays[date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}（${day}） ${hour}時${minute !== '00' ? minute + '分' : ''}`;
};

const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const itemsPerPage = 5;

  // ソート（日付が近い順）
  const sortedEvents = [...eventData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const filteredEvents =
    selectedCategory === 'すべて'
      ? sortedEvents
      : sortedEvents.filter((event) => event.category === selectedCategory);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="event-list-container">
      <h2 className="title">地域イベント一覧</h2>

      <div className="category-filter">
        <label htmlFor="category">カテゴリーで検索：</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categoryData.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      {currentEvents.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>イベントがありません</p>
      ) : (
        currentEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3 className="event-title">{event.title}</h3>
            <div className="event-content">
              <p><strong>日時：</strong>{formatDateWithWeekday(event.date)}</p>
              <p><strong>会場：</strong>{event.place}</p>
              <p><strong>カテゴリー：</strong>{event.category}</p>
              <div className="button-group">
                <Link to={`/event-list/${event.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                  <button className="detail-button">詳細</button>
                </Link>
                <button className="favorite-button" onClick={() => alert('お気に入りに追加しました')}>
                  お気に入り
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="pagination">
        <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
          前へ
        </button>
        {Array.from({ length: Math.ceil(filteredEvents.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
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
          disabled={startIndex + itemsPerPage >= filteredEvents.length}
        >
          次へ
        </button>
      </div>
    </div>
  );
};

export default EventList;