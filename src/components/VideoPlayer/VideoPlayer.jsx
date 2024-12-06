import React, { useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div className="video-player">
      <video ref={videoRef} src={videoUrl} controls />
      <div className="controls">
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
