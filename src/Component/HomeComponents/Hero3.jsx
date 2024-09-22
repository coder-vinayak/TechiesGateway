import React from 'react'

function Hero3() {
  return (
    <div className="flex flex-col gap-9 px-4"> {/* Add padding for smaller screens */}
      {/* Header Section */}
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <div className="mt-9 px-6 py-3 bg-[#3D55CC1A] rounded-3xl text-[#3D55CC] font-medium text-lg text-center">
          Features
        </div>
        <p className="text-[#000000] font-semibold text-center text-2xl md:text-3xl lg:text-4xl leading-tight">
          Elevate Your Social Media Strategy
        </p>
        <p className="text-[#828282] font-normal text-center text-base md:text-lg lg:text-xl leading-tight">
          Boost your social media with instant results and 24/7 support. Ideal for influencers, businesses, and resellers.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-screen-xl flex flex-wrap mx-auto justify-center items-center gap-9"> {/* Adjusted gap for spacing */}
        <div className="gradient-border w-full md:w-[602px] h-auto flex justify-center items-center">
          <div className="w-full rounded-2xl flex flex-col gap-3 bg-[#F9F9FF] p-4 items-center">
            <p className="font-semibold text-center text-lg md:text-2xl lg:text-3xl leading-tight">User-Friendly Dashboard</p>
            <p className="text-[#6F6C8F] font-normal text-center text-base md:text-lg w-full max-w-lg">
              An intuitive, easy-to-navigate interface for managing orders and tracking progress.
            </p>
            <div id="img3"></div>
          </div>
        </div>

        <div className="gradient-border w-full md:w-[602px] h-auto flex justify-center items-center">
          <div className="w-full rounded-2xl flex flex-col gap-3 bg-[#F9F9FF] p-4 items-center">
            <p className="font-semibold text-center text-lg md:text-2xl lg:text-3xl leading-tight">Automated Order Processing</p>
            <p className="text-[#6F6C8F] font-normal text-center text-base md:text-lg w-full max-w-lg">
              Instant or scheduled delivery of services, with orders processed automatically.
            </p>
            <div id="img4"></div>
          </div>
        </div>

        <div className="gradient-border w-full md:w-[342px] h-auto flex justify-center items-center">
          <div className="w-full rounded-2xl flex flex-col gap-3 bg-[#F9F9FF] p-4 items-center">
            <p className="font-semibold text-center text-lg md:text-2xl lg:text-3xl leading-tight">API Integration</p>
            <p className="text-[#6F6C8F] font-normal text-center text-base md:text-lg w-full max-w-xs">
              API support for developers and resellers to integrate the panel’s services into their own platforms.
            </p>
            <div id="img5"></div>
          </div>
        </div>

        <div className="gradient-border w-full md:w-[484px] h-auto flex justify-center items-center">
          <div className="w-full rounded-2xl flex flex-col gap-3 bg-[#F9F9FF] p-4 items-center">
            <p className="font-semibold text-center text-lg md:text-2xl lg:text-3xl leading-tight">Secure and Confidential</p>
            <p className="text-[#6F6C8F] font-normal text-center text-base md:text-lg w-full max-w-md">
              Secure payment gateways and strict privacy policies to protect user information.
            </p>
            <div id="img6"></div>
          </div>
        </div>

        {/* Fifth Card - Set the same width and properties as the larger cards */}
        <div className="gradient-border w-full md:w-[602px] h-auto flex justify-center items-center"> 
          <div className="w-full rounded-2xl flex flex-col gap-3 bg-[#F9F9FF] p-4 items-center">
            <p className="font-semibold text-center text-lg md:text-2xl lg:text-3xl leading-tight">Customizable Service Packages</p>
            <p className="text-[#6F6C8F] font-normal text-center text-base md:text-lg w-full max-w-lg">
              Ability to create custom service packages tailored to specific needs.
            </p>
            <div id="img7"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3
