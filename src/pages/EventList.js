// src/pages/EventList.js
import React, { useState } from 'react';
import './EventList.css';
import { Link } from 'react-router-dom';

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

const eventData = [
  {
    id: 1,
    title: '親子で楽しむ科学教室',
    date: '2025-07-15T15:00:00',
    place: '中央公民館',
    category: '教育',
  },
  {
    id: 2,
    title: '郷土の歴史を学ぶ会',
    date: '2025-07-10T14:00:00',
    place: '郷土資料館',
    category: '人文・社会科学',
  },
  {
    id: 3,
    title: 'みんなでストレッチ体操',
    date: '2025-07-08T10:30:00',
    place: '市民体育館',
    category: 'スポーツ',
  },
  {
    id: 4,
    title: '写真撮影ワークショップ',
    date: '2025-08-01T13:00:00',
    place: '文化センター',
    category: '芸術・文化',
  },
  {
    id: 5,
    title: 'プログラミング体験会',
    date: '2025-07-20T11:00:00',
    place: '青少年センター',
    category: '産業・技術',
  },
  {
    id: 6,
    title: '防災講座と避難訓練',
    date: '2025-07-12T09:00:00',
    place: '市役所ホール',
    category: 'その他',
  },
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
          {categories.map((cat) => (
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
                <button className="detail-button">
                  <Link to={`/event-list/${event.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                    詳細
                  </Link>
                </button>
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