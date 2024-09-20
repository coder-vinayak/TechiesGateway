// import React from 'react'

// function Hero5() {
//   return (<>
//  <div className=' flex flex-col gap-3 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
//     <div className='mt-[36px] px-6 py-3 border-0 bg-[#3D55CC1A] w-fit flex gap-[10px] rounded-[24px] text-[#3D55CC] font-[400] text-[18px] text-center leading-[21.78px]'>
//       Reseller
//     </div>
//     <p className='text-[#000000] font-[600] text-[32px] text-center leading-[38.73px]'>
// Empower your business ith comprehenive tools    </p>
  
//     </div>
    

    
    
//     </>
//   )
// }

// export default Hero5
import React from 'react';

function Hero5() {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center bg-gray-100 py-10">
      {/* Reseller Badge */}
      <div className="mt-4 px-6 py-3 bg-[#3D55CC1A] w-fit flex gap-2 rounded-[24px] text-[#3D55CC] font-medium text-[18px] text-center leading-[22px]">
        Reseller
      </div>

      {/* Main Heading */}
      <p className="text-[#000000] font-semibold text-[32px] text-center leading-[40px]">
        Empower Your Business with Comprehensive Tools
      </p>

      {/* Description */}
      <p className="text-[#828282] font-normal text-[18px] text-center leading-[22px] max-w-2xl">
        Seamless integration with your website or platform, allowing you to automate orders and manage multiple clients easily.
      </p>

      {/* API Integration Section */}
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-6">
        {/* Integration Box 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-[300px] flex flex-col items-center text-center">
          <img
            src="https://via.placeholder.com/64"
            alt="API Integration Icon"
            className="mb-4"
          />
          <p className="font-bold text-[18px] text-gray-800">API Integration</p>
          <p className="text-gray-500 text-[16px] mt-2">
            Seamless integration with your website or platform, automating orders with ease.
          </p>
        </div>

        {/* Integration Box 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-[300px] flex flex-col items-center text-center">
          <img
            src="https://via.placeholder.com/64"
            alt="API Integration Icon"
            className="mb-4"
          />
          <p className="font-bold text-[18px] text-gray-800">API Integration</p>
          <p className="text-gray-500 text-[16px] mt-2">
            Manage multiple clients efficiently with our integrated API services.
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded mt-8">
        Get Started
      </button>
    </div>
  );
}

export default Hero5;
