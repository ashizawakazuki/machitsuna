// src/pages/EventDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/EventDetail.css';

const eventData = [
  {
    id: 1,
    title: '親子で楽しむ科学教室',
    date: '2025-07-15T15:00:00',
    place: '中央公民館',
    category: '教育',
    description: '親子で科学の楽しさを体験する教室です。',
    target: '小学生と保護者',
    capacity: '30組',
    organizer: '中央公民館',
    staff: '〇〇',
    contact: '090-〇〇〇〇-〇〇〇〇',
    deadline: '2025-07-10',
  },
  {
    id: 2,
    title: '郷土の歴史を学ぶ会',
    date: '2025-07-10T14:00:00',
    place: '郷土資料館',
    category: '人文・社会科学',
    description: '地元の歴史を学び、語り合う会です。',
    target: '一般市民',
    capacity: '50名',
    organizer: '歴史を愛する会',
    staff: '〇〇',
    contact: '090-〇〇〇〇-〇〇〇〇',
    deadline: '2025-07-05',
  },
  {
    id: 3,
    title: 'みんなでストレッチ体操',
    date: '2025-07-08T10:30:00',
    place: '市民体育館',
    category: 'スポーツ',
    description: '誰でもできる簡単ストレッチをみんなで楽しみます。',
    target: '全年齢',
    capacity: '40名',
    organizer: '市スポーツ振興課',
    staff: '〇〇',
    contact: '090-3333-4444',
    deadline: '2025-07-03',
  },
  {
    id: 4,
    title: '写真撮影ワークショップ',
    date: '2025-08-01T13:00:00',
    place: '文化センター',
    category: '芸術・文化',
    description: 'プロカメラマンによる写真講座です。',
    target: '高校生以上',
    capacity: '20名',
    organizer: '文化センター',
    staff: '〇〇',
    contact: '090-〇〇〇〇-〇〇〇〇',
    deadline: '2025-07-25',
  },
  {
    id: 5,
    title: 'プログラミング体験会',
    date: '2025-07-20T11:00:00',
    place: '青少年センター',
    category: '産業・技術',
    description: '初心者向けプログラミング体験会です。',
    target: '中高生',
    capacity: '25名',
    organizer: 'IT教育推進協会',
    staff: '〇〇',
    contact: '090-〇〇〇〇-〇〇〇〇',
    deadline: '2025-07-15',
  },
  {
    id: 6,
    title: '防災講座と避難訓練',
    date: '2025-07-12T09:00:00',
    place: '市役所ホール',
    category: 'その他',
    description: '防災の基本と避難訓練を学びます。',
    target: '地域住民',
    capacity: '制限なし',
    organizer: '市防災課',
    staff: '〇〇',
    contact: '090-〇〇〇〇-〇〇〇〇',
    deadline: '2025-07-07',
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = eventData.find(e => e.id === parseInt(id));

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