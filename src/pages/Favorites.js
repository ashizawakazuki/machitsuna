// src/pages/Favorites.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Favorites.css';
import categoryData from './data/categoryData';
import eventData from './data/eventData';
import talentData from './data/talentData';

const Favorites = () => {
  const [activeTab, setActiveTab] = useState('talent');
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const itemsPerPage = 5;
  const [talentPage, setTalentPage] = useState(1);
  const [eventPage, setEventPage] = useState(1);

  const formatDateWithWeekday = (dateString) => {
    const date = new Date(dateString);
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}（${weekdays[date.getDay()]}）`;
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredEvents = selectedCategory === 'すべて'
    ? eventData
    : eventData.filter(event => event.category === selectedCategory);

  const filteredTalents = selectedCategory === 'すべて'
    ? talentData
    : talentData.filter(talent => talent.category === selectedCategory);

  const paginatedTalents = filteredTalents.slice((talentPage - 1) * itemsPerPage, talentPage * itemsPerPage);
  const paginatedEvents = filteredEvents.slice((eventPage - 1) * itemsPerPage, eventPage * itemsPerPage);

  useEffect(() => {
    setTalentPage(1);
    setEventPage(1);
  }, [selectedCategory]);

  return (
    <div className="favorites-container">
      <h2 className="title">お気に入りリスト</h2>

      <div className="tab-switch">
        <button
          className={activeTab === 'talent' ? 'active' : ''}
          onClick={() => setActiveTab('talent')}
        >
          人材バンク
        </button>
        <button
          className={activeTab === 'event' ? 'active' : ''}
          onClick={() => setActiveTab('event')}
        >
          地域イベント
        </button>
      </div>

      <div className="category-filter">
        <label htmlFor="category">カテゴリーで検索：</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categoryData.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {activeTab === 'event' ? (
        <React.Fragment key="event-tab">
          {paginatedEvents.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>イベントがありません</p>
          ) : (
            <>
              {paginatedEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-content">
                    <p><strong>日時：</strong>{formatDateWithWeekday(event.date)}</p>
                    <p><strong>会場：</strong>{event.place}</p>
                    <p><strong>カテゴリー：</strong>{event.category}</p>
                    <div className="button-group">
                      <Link to={`/event-list/${event.id}`}>
                        <button className="favorite-detail-button">詳細</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pagination">
                <button onClick={() => setEventPage(prev => prev - 1)} disabled={eventPage === 1}>前へ</button>
                {Array.from({ length: Math.ceil(filteredEvents.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => setEventPage(number)}
                    className={eventPage === number ? 'active-page' : ''}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => setEventPage(prev => prev + 1)}
                  disabled={eventPage * itemsPerPage >= filteredEvents.length}
                >次へ</button>
              </div>
            </>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment key="talent-tab">
          {paginatedTalents.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>登録者がいません</p>
          ) : (
            <>
              {paginatedTalents.map((talent) => (
                <div key={talent.id} className="talent-card">
                  <h3 className="talent-title">{talent.name}さん</h3>
                  <div className="talent-content">
                    <p><strong>特技・スキル：</strong>{talent.skill}</p>
                    <p><strong>カテゴリー：</strong>{talent.category}</p>
                    <div className="button-group">
                      <Link to={`/talent-bank/${talent.id}`}>
                        <button className="favorite-detail-button">詳細</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pagination">
                <button onClick={() => setTalentPage(prev => prev - 1)} disabled={talentPage === 1}>前へ</button>
                {Array.from({ length: Math.ceil(filteredTalents.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => setTalentPage(number)}
                    className={talentPage === number ? 'active-page' : ''}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => setTalentPage(prev => prev + 1)}
                  disabled={talentPage * itemsPerPage >= filteredTalents.length}
                >次へ</button>
              </div>
            </>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Favorites;