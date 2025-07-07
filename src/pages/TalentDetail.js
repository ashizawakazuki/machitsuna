import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/TalentDetail.css';
import talentData from './data/talentData'; 

const TalentDetail = () => {
  const { id } = useParams();
  const talent = talentData.find(t => t.id === parseInt(id));
  
  if (!talent) {
    return <p>該当する人材が見つかりません。</p>;
  }
  
  return (
    <div className="talent-detail-wrapper"> {/* ラッパー追加 */}
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
    </div>
  );
};

export default TalentDetail;