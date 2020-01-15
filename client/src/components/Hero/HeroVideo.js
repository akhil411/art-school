import React from "react";
import "./style.css";

function HeroVideo() {
  return (
    <div className="hero-image" poster="../assets/images/home-poster.png">
      <video autoPlay muted loop className="homeVideo">
          <source src="../assets/video/home-video.mp4" type="video/mp4"></source>
        </video>
    </div>
  );
}

export default HeroVideo;