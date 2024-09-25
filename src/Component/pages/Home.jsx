// import "./Home.css";
// import React from "react";
// import Navbar from "../Common/Navbar";
// import Hero1 from "../HomeComponents/Hero1";
// import Hero2 from "../HomeComponents/Hero2";
// import Hero3 from "../HomeComponents/Hero3";
// import Hero4 from "../HomeComponents/Hero4";
// import Form from "../HomeComponents/Form";
// import Accordion from "../HomeComponents/Accordion";
// import Hero5 from "../HomeComponents/Hero5";
// import Hero6 from "../HomeComponents/Hero6";

// const Home = () => {
  
//   return (
//     <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
//       <Navbar />
//       <div
//         id="img"
//         className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]" // Add margin-top here
//       >
//         <Hero1 />


//         <Form />


//       </div>
//       <div className="flex flex-col ">
//         <Hero2 />
//         <Hero3 />
//         <Hero4 />
//         <Hero5 />
//         <Accordion />
//         <Hero6 />
//       </div>
//     </div>
//   );
// };

// export default Home;


import "./Home.css";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Hero1 from "../HomeComponents/Hero1";
import Hero2 from "../HomeComponents/Hero2";
import Hero3 from "../HomeComponents/Hero3";
import Hero4 from "../HomeComponents/Hero4";
import Hero5 from "../HomeComponents/Hero5";
import Hero6 from "../HomeComponents/Hero6";
import Accordion from "../HomeComponents/Accordion";
import Form from "../HomeComponents/Form"; // Login Form
import SignUp from "../SignupComponent/SignupForm";
// Signup Form

const Home = () => {
  // Step 1: Create state to toggle between Login and Signup
  const [showLogin, setShowLogin] = useState(true); // true = Login, false = Signup

  // Step 2: Toggle function to switch forms
  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
      <Navbar />
      <div
        id="img"
        className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]"
      >
        <Hero1 />
        {/* Step 3: Conditionally render Login or Signup based on state */}
        {showLogin ? <Form toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
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
