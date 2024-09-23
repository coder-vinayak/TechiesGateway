// import React from 'react';
// import '../../assets/Group 1000003568.png'

// function Hero2() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-12 px-6 py-12 items-center justify-center bg-[#F9F9FF]"> 
      
//       {/* Left Section - Text and Cards */}
//       <div className="flex flex-col lg:w-1/2 gap-8">
//         {/* Header Section */}
//         <div className="flex flex-col gap-3">
//           <div className="bg-[#3D55CC1A] rounded-2xl px-4 py-2 text-center text-[#3D55CC] font-semibold text-md lg:text-lg">
//             Reseller
//           </div>
//           <p className="text-[#000000] font-semibold text-2xl lg:text-3xl xl:text-4xl leading-snug">
//             Empower Your Business with Comprehensive Tools
//           </p>
//           <p className="text-[#828282] font-normal text-base lg:text-lg xl:text-xl leading-normal">
//             Seamless integration with your website or platform, allowing you to automate orders and manage multiple clients easily.
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className="flex flex-col gap-6">
//           {/* Card 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center">
//             <img src="/path-to-api-icon.png" alt="API Icon" className="w-10 h-10" />
//             <div>
//               <p className="font-semibold text-lg lg:text-xl">API Integration</p>
//               <p className="text-[#6F6C8F] font-normal text-base lg:text-lg">
//                 Seamless integration with your website or platform, automating orders with ease.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center">
//             <img src="/path-to-api-icon.png" alt="API Icon" className="w-10 h-10" />
//             <div>
//               <p className="font-semibold text-lg lg:text-xl">API Integration</p>
//               <p className="text-[#6F6C8F] font-normal text-base lg:text-lg">
//                 Manage multiple clients efficiently with our integrated API services.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <button className="w-full lg:w-[200px] px-6 py-3 bg-[#3D55CC] text-white rounded-full text-lg font-semibold mt-6">
//           Get Started
//         </button>
//       </div>

//       {/* Right Section - Image */}
//       <div id='' className="lg:w-1/2 flex justify-center lg:justify-end">
//         {/* <img
//           src={Group 1000003566.png}
//           alt="SMM Panel"
//           className="w-full max-w-lg object-contain"
//         /> */}
//       </div>
//     </div>
//   );
// }

// export default Hero2;



import '../pages/Home.css'
import React from "react";
import Highlightedtect from "../Common/Highlightedtect";
import logosContainer from '../../assets/LogosContainer.png';

function Hero2() {
  return (
    <div>
      <div className="w-full h-auto flex flex-col gap-6 justify-center items-center border-b-2 py-8">
        <p className="text-center font-semibold text-lg md:text-2xl lg:text-4xl leading-6 md:leading-7 lg:leading-9">
          Our <Highlightedtect text={"Trusted Partners"} /> - Empowering Success Together
        </p>
        <div className="h-auto w-full flex items-center justify-center px-4">
          {/* Ensure the image path is correct */}
          <div className="h-auto w-full max-w-6xl">
          <img 
            src={logosContainer} 
            alt="Trusted Partners Logos" 
            className="h-full w-full object-contain" 
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;