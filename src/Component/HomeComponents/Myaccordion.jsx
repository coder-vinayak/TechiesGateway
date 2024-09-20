
import React from 'react';
import { FaPlus } from "react-icons/fa";

function Myaccordion({ question, answer, isActive, onClick }) {
  return (
    <div 
      className={`w-[604px] p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${isActive ? 'bg-[#E6E8FF]' : 'bg-white'}`} 
      onClick={onClick}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-[#1A1A1A]'>{question}</h3>
        <span className={`text-2xl font-bold transition-transform `}>
          {isActive ? 
          <div className='w-[41.5px] h-[42.5px] rounded-lg bg-[#4A3AFF] flex items-center justify-center'>
            <FaPlus className='w-[18px] h-[2px] border-[0.3px] bg-white'/>
          </div> : 
          <div className='w-[41.5px] h-[42.5px] rounded-lg bg-[#6F6C90] flex items-center justify-center'>
            <FaPlus className='w-[18px] h-[18px] text-white'/>
          </div>}
        </span>
      </div>
        {/* Show answer if active */}
        {isActive && (
          <p className='mt-3 text-gray-600 w-[492px] h-[120px] text-base'>
            {answer}
          </p>
        )}
    </div>
  );
}

export default Myaccordion;
