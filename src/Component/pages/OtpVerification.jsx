

// OtpVerification.js
import React, { useState } from 'react';
import Highlightedtect from '../Common/Highlightedtect';
import './OtpVerification.css';
import Navbar from '../Common/Navbar';

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP is ${otp.join("")}`);
  };

  return (
    
    <div>
    <Navbar /> {/* Add Navbar here if it's required */}
         <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
           <div
             id="img"
             className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]" >
  
    {/* <div className="otp-container"> */}
      <div className="otp-box">
        <h2 className="otp-title">
          Verify <span><Highlightedtect text={'OTP'} /></span>
        </h2>
        <p className="otp-description">
          Enter the OTP to verify your identity and secure your account.
        </p>
        <form onSubmit={handleSubmit} className="otp-form">
          <div className="otp-inputs">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-input"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <button type="submit" className="otp-submit-btn">
            Verify
          </button>
        </form>
      </div>
    {/* </div> */}
    </div></div>

   
   </div>
  );
};

export default OtpVerification;
