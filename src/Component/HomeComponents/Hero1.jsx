import React from 'react'
import '../pages/Home.css'

import Navbar from '../Common/Navbar'
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Highlightedtect from '../Common/Highlightedtect';

function Hero1() {
  return (
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
    
  )
}

export default Hero1