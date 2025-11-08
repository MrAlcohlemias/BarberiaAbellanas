// 📄 VideoBackground.jsx
import React, { useRef, useEffect, useState } from "react";
import videoSrc from "../assets/videoBackground.mp4";
import "./VideoBackground.css";

export default function VideoBackground({ play, onBlurEnd }) {
  const videoRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const [blurActive, setBlurActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (play && !hasPlayedRef.current) { 
      video.play();
      video.playbackRate = 2.5;
      hasPlayedRef.current = true;
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4.5 && !blurActive) {
        setBlurActive(true);

        setTimeout(() => {
          if (onBlurEnd) onBlurEnd();
        }, 1500);
      }
    };

    const handleEnded = () => {
      video.pause();
      video.currentTime = video.duration;
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [play, blurActive, onBlurEnd]);

  return (
    <video
      ref={videoRef}
      muted
      className={blurActive ? "blur-video" : ""}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -2,
        transition: "filter 3s ease",
      }}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
