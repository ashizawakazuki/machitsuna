// src/pages/TalentDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TalentDetail.css';


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

  const TalentDetail = () => {
    const { id } = useParams();
    const talent = talentData.find(t => t.id === parseInt(id));
  
    if (!talent) {
      return <p>該当する人材が見つかりません。</p>;
    }
  
    return (
      <div className="talent-detail">
        <Link to="/talent-bank" className="back-link">{'＜'}一覧へ戻る</Link>
        <h2>詳細画面</h2>
        <div className="event-content">
          <p><strong>名前：</strong>{talent.name} さん</p>
          <p><strong>特技・スキル：</strong>{talent.skill}</p>
          <p><strong>カテゴリー：</strong>{talent.category}</p>
          <p><strong>指導料：</strong>無料</p>
          <p><strong>可能な時：</strong>土日 夕方</p>
          <p><strong>資格：</strong>〇〇</p>
          <p><strong>現在の活動：</strong>〇〇〇〇</p>
          <p><strong>可能地域：</strong>〇〇〇</p>
          <p><strong>一言：</strong>皆様とお会いできるのを楽しみにしております</p>
        </div>
        <button className="contact-button">管理者を通して依頼</button>

      </div>
    );
  };

export default TalentDetail;