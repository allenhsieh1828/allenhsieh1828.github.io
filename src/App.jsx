import React, { useState, useRef } from 'react';
import './App.css';
import bgMusic from './assets/bg-music.mp3';
// 匯入照片：請確保路徑與副檔名（JPG）完全正確
import avatarImg from './assets/avatar.JPG'; 
import backgroundWall from './assets/background.jpg';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleMusicClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app-container">
      <audio ref={audioRef} src={bgMusic} loop />

      {/* 頂部區域：透過 style 注入不同的背景照片 */}
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `linear-gradient(rgba(13, 2, 22, 0.6), #0d0216), url(${backgroundWall})` 
        }}
      >
        <div className="hero-content">
          <header className="hero-header">
            {/* 左側：姓名資訊 */}
            <div className="title-area">
              <p className="subtitle">理工之男</p>
              <h1>謝博丞</h1>
            </div>

            {/* 右側：顯示大頭貼照片 */}
            <div className="profile-avatar">
              <img src={avatarImg} alt="個人頭像" />
            </div>
          </header>

          <p className="intro-text">
            我畢業於亞洲大學資訊工程學系，具備扎實的程式基礎，並專注於 web 前端開發方向的學習與實作，主要學習與使用 HTML、CSS、JavaScript，並以 React 作為主要的前端框架進行實作練習，喜歡架設網站與特效進行一些有趣的互動。也會特別留意版面結構與使用者操作流程，希望做出不只是「能用」，而是「好用」的介面。樂於與設計或後端角色合作，將需求轉化為穩定清楚的前端實作。未來希望多多參與產品開發流程，持續精進前端技術。
          </p>
        </div>
      </section>

      <main className="content-wrapper">
        <section className="skills-section">
          <h2 className="section-title">技能</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#e34f26', fontWeight:'bold'}}>HTML</span></div>
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#1572b6', fontWeight:'bold'}}>CSS3</span></div>
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#f7df1e', fontWeight:'bold'}}>Java</span></div>
              <p>Java</p>
            </div>
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#fff', fontWeight:'bold'}}>Cursor</span></div>
              <p>Cursor</p>
            </div>
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#0072E3', fontWeight:'bold'}}>AWS</span></div>
              <p>AWS</p>
            </div>
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#00FFFF', fontWeight:'bold'}}>React</span></div>
              <p>React</p>
            </div>
            <div className="skill-item">
              <div className="icon-box"><span style={{color:'#c9a063', fontWeight:'bold'}}>敬請期待</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2 className="section-title">聯絡</h2>
          <p>Email: allenhsieh1828@gmail.com</p>
          <p>Tel: 0911730966</p>
        </section>
      </main>

      <button className="music-play-btn" onClick={handleMusicClick} aria-label="播放音樂">
        {isPlaying ? <div className="pause-icon"></div> : <div className="play-icon"></div>}
      </button>
    </div>
  );
}

export default App;
