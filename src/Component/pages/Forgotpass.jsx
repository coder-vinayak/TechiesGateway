import Navbar from "../Common/Navbar";  
import React, { useState } from 'react';
import Highlightedtect from "../Common/Highlightedtect";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";


import './Forgotpass.css'; 
import { FaGoogle,  FaEnvelope } from 'react-icons/fa';

function Forgotpass({setFp,setOv}) {
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
   
    console.log("OTP sent to:", email);
    setFp(false);
    setOv(true);
  };

  return (
    <>
      <Navbar /> 
      <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
        <div
          id="img"
          className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]"
        >
         
          <div className="whitebox">
            <p className="font-semibold text-[20px] md:text-[24px] leading-[25px] md:leading-[29px] text-center">
              Forget <Highlightedtect text={'Password'} />
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Easily reset your password and regain access to your account instantly.
            </p>


            <div className="forgotpass-form">
              <div className="relative">
                <FaEnvelope className=" text-[#3D55CC] absolute left-[50px]  top-[45px] transform -translate-y-1/2 " />
                <input
                  type="email"
                  placeholder="Username/ Email"
                  className="forgotpass-input pl-16"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>

  
              <button className="forgotpass-btn" onClick={handleSendOTP}>
                Send OTP
              </button>
            </div>

          
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>


<div className="social-login-buttons flex space-x-2 md:flex-row flex-col">
  <button className="flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg w-full hover:bg-gray-100 mb-2 md:mb-0">
    <FcGoogle size={24} className="mr-2" /> Login with Google
  </button>
  <button className="flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg w-full hover:bg-gray-100">
    <FaFacebook size={24} className="mr-2 text-[#3D55CC]" /> Login with Facebook
  </button>
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpass;
