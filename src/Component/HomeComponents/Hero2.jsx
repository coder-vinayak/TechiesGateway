import '../pages/Home.css'
import React from "react";
import Navbar from "../Common/Navbar";
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Highlightedtect from "../Common/Highlightedtect";

function Hero2() {
  return (
    <div>
      <div className="w-full h-[277px] flex flex-col  gap-[36px] justify-center items-center border-b-[2px]">
        <p className="text-center font-[600] text-[32px] leading-[38.73px]">
          Our <Highlightedtect text={"Trusted Partners"} /> - Empowering Success
          Together
        </p>
        <div className="h-[102px] w-full flex items-center justify-center">
          <div id="img2" className="h-[36.85px] w-[1218.63px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
