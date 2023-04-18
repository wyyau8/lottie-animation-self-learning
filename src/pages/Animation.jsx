import React, { useContext } from "react";
import DisplayLottie from "./DisplayLottie";
import logoAnimation from "../assets/lottie/logo.json";
import "../assets/css/Animation.css"

export default function Animation() {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <DisplayLottie animationData={logoAnimation} />
      </div>
    </div>
  );
}
