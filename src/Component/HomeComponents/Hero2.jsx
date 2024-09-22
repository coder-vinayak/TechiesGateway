import '../pages/Home.css'
import React from "react";
import Highlightedtect from "../Common/Highlightedtect";

function Hero2() {
  return (
    <div>
      <div className="w-full h-auto flex flex-col gap-6 justify-center items-center border-b-2 py-8">
        <p className="text-center font-semibold text-lg md:text-2xl lg:text-4xl leading-6 md:leading-7 lg:leading-9">
          Our <Highlightedtect text={"Trusted Partners"} /> - Empowering Success Together
        </p>
        <div className="h-auto w-full flex items-center justify-center px-4">
          {/* Ensure the image path is correct */}
          <div id="img2" className="h-auto w-full max-w-6xl">
            <img src="/path-to-your-image.png" alt="Trusted Partners Logos" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
