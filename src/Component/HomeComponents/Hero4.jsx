import React from 'react';
import '../pages/Home.css';

function Hero4() {
  return (
    <div className="flex flex-col gap-3 w-full p-0 border-0 justify-center items-center">
      {/* Header Section */}
      <div className="mt-9 px-6 py-3 bg-[#3D55CC1A] w-fit flex gap-2 rounded-3xl text-[#3D55CC] font-medium text-lg text-center">
        Why choose us
      </div>
      <p className="text-[#000000] font-semibold text-center text-2xl md:text-3xl lg:text-4xl leading-tight">
        Superior Social Media Solutions
      </p>
      <p className="text-[#828282] font-normal text-center text-base md:text-lg lg:text-xl leading-tight">
        Fast results, customizable options, and exceptional support. Perfect for influencers, businesses, and resellers.
      </p>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row gap-7 mt-7 w-full justify-center items-center">
        <div className="w-full max-w-xs md:max-w-md border border-[#C8C8C8] rounded-3xl shadow-md flex flex-col justify-start items-start p-6">
          {/* Icon */}
          <div className="w-12 h-12 bg-[#4B58F4] relative rounded-full flex justify-center items-center">
            <div id="imgA" className="w-12 h-12 absolute left-1.5 top-2 bg-no-repeat"></div>
          </div>

          {/* Text */}
          <div className="text-left mt-4">
            <h2 className="text-xl font-semibold">Secure & Confidential</h2>
            <p className="text-base text-[#707070] mt-2">
              Enjoy peace of mind with our secure transactions and strict privacy policies.
            </p>
          </div>
        </div>

        <div className="w-full max-w-xs md:max-w-md border border-[#C8C8C8] rounded-3xl shadow-md flex flex-col justify-start items-start p-6">
          {/* Icon */}
          <div className="w-12 h-12 bg-[#D02C5B] relative rounded-full flex justify-center items-center">
            <div id="imgB" className="w-12 h-12 absolute left-2 top-2.5 bg-no-repeat"></div>
          </div>

          {/* Text */}
          <div className="text-left mt-4">
            <h2 className="text-xl font-semibold">24/7 Customer Support</h2>
            <p className="text-base text-[#707070] mt-2">
              Get help anytime with our round-the-clock support team.
            </p>
          </div>
        </div>

        <div className="w-full max-w-xs md:max-w-md border border-[#C8C8C8] rounded-3xl shadow-md flex flex-col justify-start items-start p-6">
          {/* Icon */}
          <div className="w-12 h-12 bg-[#FFA800] relative rounded-full flex justify-center items-center">
            <div id="imgC" className="w-12 h-12 absolute left-3 top-3 bg-no-repeat"></div>
          </div>

          {/* Text */}
          <div className="text-left mt-4">
            <h2 className="text-xl font-semibold">Customizable Service</h2>
            <p className="text-base text-[#707070] mt-2">
              Tailor our services to meet your specific goals and needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero4;
