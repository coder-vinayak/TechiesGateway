import './Home.css';
import React from 'react'
import Navbar from '../Common/Navbar'
import { CiSearch } from "react-icons/ci";
import Highlightedtect from '../Common/Highlightedtect';

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col bg-[#FFFFFF]'>
        <Navbar/>
        <div id='img' className={"flex flex-col w-full mt-0 items-center"}>
          <div className='flex flex-col h-[891px] mt-[202px] w-7/12 gap-[18px] items-center'>
            <p className='text-[48px] leaading-[68px] m-0 text-center font-semibold'>BoostHub - <Highlightedtect text={"Supercharge"}/> Your Social Media Metrics</p>
            <div className='flex w-[564px] h-[48px] gap-[18px] mx-auto'>
              <div className='flex gap-10 w-[438px] h-[48px] justify-between  bg-[#F3F3F3] rounded-[48px] py-[12px] px-[24px] shadow-[0px_2px_162.9px_0px_#00000040]'>
                <p className='leading-[21.78px] text-[18px] font-[400] text-[#828282]'>Search service for social handle...</p>
                <CiSearch size={24}/>
              </div>
              <div className='bg-[#3D55CC] py-[12px] px-[24px] rounded-[48px]'>Search</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home