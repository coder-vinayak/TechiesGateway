
import React from 'react';

function Myaccordion({ question, answer, isActive, onClick }) {
  return (
    <div 
      className={`w-full p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${isActive ? 'bg-[#E6E8FF]' : 'bg-white'}`} 
      onClick={onClick}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-[#1A1A1A]'>{question}</h3>
        <span className={`text-2xl font-bold transition-transform ${isActive ? 'rotate-45' : ''}`}>
          {isActive ? '-' : '+'}
        </span>
      </div>
      {/* Show answer if active */}
      {isActive && (
        <p className='mt-3 text-gray-600 text-base'>
          {answer}
        </p>
      )}
    </div>
  );
}

export default Myaccordion;
