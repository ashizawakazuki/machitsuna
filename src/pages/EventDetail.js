import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/EventDetail.css';
import eventDetailData from './data/eventDetailData';

const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetailData.find(e => e.id === parseInt(id));

  if (!event) {
    return <p>該当するイベントが見つかりません。</p>;
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const day = weekdays[date.getDay()];
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${date.getFullYear()}年${(date.getMonth() + 1)}月${date.getDate()}日（${day}） ${hour}時${minute}分`;
  };

  return (
    <div className="event-detail">
      <Link to="/event-list" className="back-link">{'＜'}一覧へ戻る</Link>
      <h2 className="event-title">{event.title}</h2>
      <div className="event-content">
        <p><strong>日時：</strong>{formatDate(event.date)}</p>
        <p><strong>会場：</strong>{event.place}</p>
        <p><strong>カテゴリー：</strong>{event.category}</p>
        <p><strong>内容：</strong>{event.description}</p>
        <p><strong>対象者：</strong>{event.target}</p>
        <p><strong>定員：</strong>{event.capacity}</p>
        <p><strong>主催者：</strong>{event.organizer}</p>
        <p><strong>担当者：</strong>{event.staff}</p>
        <p><strong>連絡先：</strong>{event.contact}</p>
        <p><strong>申込期限：</strong>{event.deadline}</p>
      </div>
      
    </div>
  );
};

export default EventDetail;