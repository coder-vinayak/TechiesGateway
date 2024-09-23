import React, { useState } from 'react';
import '../pages/Home.css';
import { CiSearch } from "react-icons/ci";
import Highlightedtect from '../Common/Highlightedtect';

function Hero1() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div 
      className='flex flex-col h-auto w-full px-4 gap-[18px] items-center md:h-[891px] md:mt-[100px] md:w-7/12 mt-[40px]' // Reduced margin-top here
    >
      <p className='text-[24px] leading-[34px] m-0 text-center font-semibold md:text-[48px] md:leading-[68px]'>
        BoostHub - <Highlightedtect text={"Supercharge"} /> Your Social Media Metrics
      </p>
      <div className='flex flex-col w-full gap-4 mx-auto md:flex-row md:w-[80%]'>
        <div className='flex w-full justify-between bg-[#F3F3F3] rounded-[24px] py-[8px] px-[16px] shadow-[0px_2px_162.9px_0px_#00000040] items-center md:gap-10 md:rounded-[48px] md:py-[12px] md:px-[24px]'>
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Search service for social handle..."
            className="w-full bg-transparent outline-none text-[14px] font-[400] text-[#828282] md:text-[18px]"
          />
          <CiSearch size={20} className="text-[#828282] md:text-[24px]" />
        </div>
        <button className='bg-[#3D55CC] py-[8px] px-[16px] rounded-[24px] text-white mt-2 md:mt-0 md:py-[12px] md:px-[24px] md:rounded-[48px] md:w-auto w-full'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero1;
