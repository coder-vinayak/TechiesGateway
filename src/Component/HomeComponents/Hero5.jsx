import React from 'react';
import imga from "../../assets/apiimage.png"
import '../pages/Home.css';

function Hero5() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-10">
      {/* Reseller Badge */}
      <div className="mt-4 w-[200px] px-6 py-3 bg-[#3D55CC1A] rounded-[24px] text-[#3D55CC] font-medium text-[18px] text-center">
        Reseller
      </div>

      {/* Main Heading */}
      <p className="text-[#000000] font-semibold text-[32px] text-center leading-[40px] mt-4">
        Empower Your Business with Comprehensive Tools
      </p>

      {/* Description */}
      <p className="text-[#828282] font-normal text-[18px] text-center leading-[22px] max-w-2xl mt-2">
        Seamless integration with your website or platform, allowing you to automate orders and manage multiple clients easily.
      </p>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-10">
        {/* API Integration Boxes */}
        <div className="flex flex-col gap-6">
          {/* Box 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-[300px] text-center">
            {/* <img src={imga} alt="API Icon" className="w-12 mx-auto mb-4" /> Replace with your icon */}
            <div id='haha' ></div>
            <p className="font-bold text-[18px] text-gray-800">API Integration</p>
            <p className="text-gray-500 text-[16px] mt-2">
              Seamless integration with your website or platform, automating orders with ease.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-[300px] text-center">
            <img src={imga} alt="API Icon" className="w-12 mx-auto mb-4 object-contain" /> {/* Replace with your icon */}
            <p className="font-bold text-[18px] text-gray-800">API Integration</p>
            <p className="text-gray-500 text-[16px] mt-2">
              Manage multiple clients efficiently with our integrated API services.
            </p>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="hidden lg:flex">
       <div id='imgD' className='className="w-12 mx-auto mb-4"'></div>
        </div>
      </div>

      {/* Get Started Button */}
      <button className="bg-[#3D55CC] hover:bg-blue-600 text-white  py-3 px-6 rounded-3xl mt-8">
        Get Started
      </button>
    </div>
  );
}

export default Hero5;
