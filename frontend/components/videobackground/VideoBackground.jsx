// src/components/videobackground/VideoBackground.jsx
import React from "react";
import "./VideoBackground.css";

const VideoBackground = ({ children }) => {
  return (
    <div className="video-bg-container">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
      <div className="video-content">{children}</div>
    </div>
  );
};

export default VideoBackground;
