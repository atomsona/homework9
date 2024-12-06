import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import ImageZoom from './components/ImageZoom/ImageZoom';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

const App = () => {
  return (
    <div className="app">
      
      {}
      <section className="section">
        <h2>Timer</h2>
        <Timer />
      </section>

      {}
      <section className="section">
        <h2>Image Zoom</h2>
        <ImageZoom imageUrl="https://chandler.on.ge/2021/11/10/shida.jpg" />
      </section>

      {}
      <section className="section">
        <h2>Video Player</h2>
        <VideoPlayer videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" />
      </section>
    </div>
  );
};

export default App;
