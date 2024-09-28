import React from "react";
import imga from "../../assets/Apiimage.png"
import "../pages/Home.css";

function Hero5() {
  return (
    <div className="w-full m-3 lg:m-0 h-auto  lg:h-[889px] flex flex-col lg:flex-row gap-[50px] bg-[#FFFFFF] py-[50px] lg:pl-[10px] pl-0 items-center overflow-hidden">
      <div className="flex flex-col items-start justify-center w-full py-10 px-0 m-2 lg:m-0 lg:px-20">
        {/* Reseller Badge */}
        <div className="w-full">
          <div className="mt-4 max-w-fit px-6 py-3 bg-[#3D55CC1A] rounded-[24px] text-[#3D55CC] font-medium text-[18px]">
            Reseller
          </div>

          {/* Main Heading */}
          <p className="text-[#000000] font-semibold text-[32px] leading-[40px] mt-4 text-left">
            Empower Your Business with Comprehensive Tools
          </p>
        </div>

        {/* Description */}
        <p className="text-[#828282] font-normal text-[18px] leading-[22px] max-w-2xl mt-2 text-left">
          Seamless integration with your website or platform, allowing you to
          automate orders and manage multiple clients easily.
        </p>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 justify-start items-start mt-10 w-full">
          {/* API Integration Boxes */}
          <div className="flex flex-col gap-6 m-2">
            {/* Box 1 */}
            <div className="bg-white flex gap-5 shadow-lg rounded-lg p-6 w-auto lg:h-[128px] lg:w-[669px] text-left">
              <img
                src={imga}
                alt="API Icon"
                className="w-[64px] h-[64px] rounded-[8px]  shadow-[0px_12px_112px_0px_#00000029] mb-4"
              />
              <div className="flex flex-col">
                <p className="font-bold text-[18px] text-gray-800">
                  API Integration
                </p>
                <p className="text-gray-500 text-[16px] mt-2">
                  Seamless integration with your website or platform, automating
                  orders with ease.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex w-auto gap-5  shadow-lg rounded-lg p-6 lg:h-[128px] lg:w-[669px] text-left">
              <img
                src={imga}
                alt="API Icon"
                className="w-[64px] h-[64px] rounded-[8px] shadow-[0px_12px_112px_0px_#00000029] mb-4"
              />
              <div>
                <p className="font-bold text-[18px] text-gray-800">
                  Manage Clients
                </p>
                <p className="text-gray-500 text-[16px] mt-2">
                  Manage multiple clients efficiently with our integrated API
                  services.
                </p>
              </div>
            </div>
            <button className="bg-[#3D55CC] max-w-fit hover:bg-blue-600 text-white py-3 px-6 rounded-3xl mt-8 text-left">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div id="hero5img" className=" bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Hero5;
