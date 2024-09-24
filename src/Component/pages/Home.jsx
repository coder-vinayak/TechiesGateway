
import "./Home.css";
import React from "react";
import Navbar from "../Common/Navbar";

import Hero1 from "../HomeComponents/Hero1";
import Hero2 from "../HomeComponents/Hero2";
import Hero3 from "../HomeComponents/Hero3";
import Hero4 from "../HomeComponents/Hero4";
import Form from "../HomeComponents/Form";
import Accordion from "../HomeComponents/Accordion";
import Hero5 from "../HomeComponents/Hero5";
import Hero6 from "../HomeComponents/Hero6";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
      <Navbar />
      <div
        id="img"
        className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]" // Add margin-top here
      >
        <Hero1 />


        <Form />


      </div>
      <div className="flex flex-col ">
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Accordion />
        <Hero6 />
      </div>
    </div>
  );
};

export default Home;
