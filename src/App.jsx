import React, { useState } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import IntroScreen from "./components/IntroScreen";
import VideoBackground from "./components/VideoBackground";
import MainContent from "./components/MainContent";

function App() {
  const [playVideo, setPlayVideo] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  return (
    <ParallaxProvider>
      <div>
        <VideoBackground play={playVideo} onBlurEnd={() => setShowLogo(true)} />

        {!hideIntro && (
          <IntroScreen
            onStart={() => setHideIntro(true)}
            onPlayVideo={() => setPlayVideo(true)}
          />
        )}

        {hideIntro && <MainContent showLogo={showLogo} />}
      </div>
    </ParallaxProvider>
  );
}

export default App;
