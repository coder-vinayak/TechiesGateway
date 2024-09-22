// import React from 'react';
// import { FaPlus } from "react-icons/fa";

// function Myaccordion({ question, answer, isActive, onClick }) {
//   return (
//     <div 
//       className={`w-full md:w-[604px] p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${isActive ? 'bg-[#FFFFFF]' : 'bg-white'}`} 
//       onClick={onClick}
//     >
//       <div className="flex justify-between items-center">
//         <h3 className="text-base md:text-lg font-semibold text-[#1A1A1A]">{question}</h3>
//         <span className="text-2xl font-bold transition-transform">
//           {isActive ? 
//           <div className="w-[41.5px] h-[42.5px] rounded-lg bg-[#4A3AFF] flex items-center justify-center">
//             <FaPlus className="w-[18px] h-[2px] border-[0.3px] bg-white"/>
//           </div> : 
//           <div className="w-[41.5px] h-[42.5px] rounded-lg bg-[#F7F7FF] flex items-center justify-center">
//             <FaPlus className="w-[18px] h-[18px] text-[#6F6C90]"/>
//           </div>}
//         </span>
//       </div>

//       {/* Show answer if active */}
//       {isActive && (
//         <p className="mt-3 text-gray-600 text-sm md:text-base w-full md:w-[492px]">
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// }

// export default Myaccordion;


import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

function Myaccordion({ question, answer, isActive, onClick }) {
  return (
    <div 
      className={`w-full md:w-[500px] p-3 md:p-4 rounded-md shadow-md transition-all duration-300 cursor-pointer ${isActive ? 'bg-[#FFFFFF]' : 'bg-white'}`} 
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm md:text-base font-semibold text-[#1A1A1A]">{question}</h3>
        <span className="text-xl font-bold transition-transform">
          {isActive ? 
          <div className="w-[30px] h-[30px] rounded-md bg-[#4A3AFF] flex items-center justify-center">
            <FaMinus className="w-[14px] h-[14px] text-white"/>
          </div> : 
          <div className="w-[30px] h-[30px] rounded-md bg-[#F7F7FF] flex items-center justify-center">
            <FaPlus className="w-[14px] h-[14px] text-[#6F6C90]"/>
          </div>}
        </span>
      </div>

      {/* Show answer if active */}
      {isActive && (
        <p className="mt-2 text-gray-600 text-xs md:text-sm w-full md:w-[400px]">
          {answer}
        </p>
      )}
    </div>
  );
}

export default Myaccordion;
