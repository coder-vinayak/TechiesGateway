import "./Home.css";
import React from "react";
import Navbar from "../Common/Navbar";
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Highlightedtect from "../Common/Highlightedtect";
import Hero1 from "../HomeComponents/Hero1";
import Hero2 from "../HomeComponents/Hero2";
import Hero3 from "../HomeComponents/Hero3";
import Hero4 from "../HomeComponents/Hero4";
import Form from "../HomeComponents/Form";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
      <Navbar /> 
      <div
        id="img"
        className={"flex flex-col items-center h-[1158.13px] w-full mb-3 py-5"}
      >
        <Hero1 />
        <Form />
      </div>
      <div className="flex flex-col gap-[36px]">
        <Hero2 />
        <Hero3 />
        <Hero4 />
      </div>
    </div>
  );
};

export default Home;
