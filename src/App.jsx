import React, { useState, useRef } from 'react';
import './App.css';
import bgMusic from './assets/bg-music.mp3';
import avatarImg from './assets/avatar.jpg'; 
import backgroundWall from './assets/background.jpg';

// --- 引入技能圖標圖片 ---
import cssImg from './assets/css.jpg';    
import javascriptImg from './assets/javascript.jpg';  
import htmlImg from './assets/html.jpg';  
import reactImg from './assets/react.jpg'; 
import awsImg from './assets/aws.jpg';    
// ---------------------------

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

  // 定義一個通用的圖片樣式
  const iconImgStyle = { width: '70%', height: 'auto', objectFit: 'contain' };

  return (
    <div className="app-container">
      <audio ref={audioRef} src={bgMusic} loop />

      {/* 頂部區域 */}
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `linear-gradient(rgba(13, 2, 22, 0.6), #0d0216), url(${backgroundWall})` 
        }}
      >
        <div className="hero-content">
          <header className="hero-header">
            <div className="title-area">
              <p className="subtitle">理工之男</p>
              <h1>謝博丞</h1>
            </div>

            <div className="profile-avatar">
              <img src={avatarImg} alt="個人頭像" />
            </div>
          </header>

          <p className="intro-text">
            我畢業於亞洲大學資訊工程學系，具備扎實的程式基礎，並專注於 web 前端開發方向的學習與實作，主要學習與使用 HTML、CSS、JavaScript，並以 React 作為主要的前端框架進行實作練習。
          </p>
        </div>
      </section>

      <main className="content-wrapper">
        <section className="skills-section">
          <h2 className="section-title">技能</h2>
          <div className="skills-grid">
            
            {/* 修正：src 必須對應上面 import 的變數名稱 */}
            <div className="skill-item">
              <div className="icon-box">
                <img src={htmlImg} alt="HTML" style={iconImgStyle} />
              </div>
              <p>HTML</p>
            </div>

            <div className="skill-item">
              <div className="icon-box">
                <img src={cssImg} alt="CSS" style={iconImgStyle} />
              </div>
              <p>CSS</p>
            </div>

            <div className="skill-item">
              <div className="icon-box">
                <img src={javascriptImg} alt="JavaScript" style={iconImgStyle} />
              </div>
              <p>JavaScript</p>
            </div>

            <div className="skill-item">
              <div className="icon-box">
                <span style={{color:'#fff', fontWeight:'bold'}}>Cursor</span>
              </div>
              <p>Cursor</p>
            </div>

            <div className="skill-item">
              <div className="icon-box">
                <img src={awsImg} alt="AWS" style={iconImgStyle} />
              </div>
              <p>AWS</p>
            </div>

            <div className="skill-item">
              <div className="icon-box">
                <img src={reactImg} alt="React" style={iconImgStyle} />
              </div>
              <p>React</p>
            </div>

            <div className="skill-item">
              <div className="icon-box">
                <span style={{color:'#c9a063', fontWeight:'bold'}}>敬請期待</span>
              </div>
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
