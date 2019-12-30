import React from "react";
import "./style.css";

function HeroImage() {
  return (
    <div className="hero-image">
      <video autoPlay muted loop className="homeVideo">
          <source src="../assets/video/home-video.mp4" type="video/mp4"></source>
        </video>
    </div>
  );
}

export default HeroImage;