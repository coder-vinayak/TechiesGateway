import './Home.css';
import React from 'react'
import Navbar from '../Common/Navbar'
import { CiSearch } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
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
          <div className='flex items-center justify-center h-[663px] w-[746px] rounded-[24px] gap-10 bg-[#F6F6F6] shadow-[0px_8px_48px_0px_#00000014]'>
            <div className='flex flex-col w-[587px] h-[591px] gap-[36px] justify-center items-center'>
              <div className='flex flex-col w-[335px] h-[59px] gap-[8px]'>
                <p className='font-semibold text-[24px] leading-[29.05px] text-center'>Login to <Highlightedtect text={'SMM panel'}/></p>
                <p className='text-[#828282] text-[18px] font-[400] leading-[21.78px]'>Welcome back! Please enter your detail </p>
              </div>
              <div className='flex flex-col items-center justify-center w-[587px] h-[296px] gap-[16px]'>
                <div className='w-[587px] h-[296px] gap-[36px]'>
                  <div className='h-[78px] flex flex-col justify-between gap-[8px]'>
                    <p className='text-[#4B4B4B] font-[500] text-[18px] leading-[21.78px]'>Email-ID</p>
                    <div className='flex bg-[#F8F8F8] h-[48px] border-[#BBBBBB] border-[1px] w-full items-center py-[12px] px-[24px] gap-10 rounded-[48px]'>
                      <MdEmail className='text-blue-600' size={24}/>
                      <input className='bg-[#F8F8F8] text-[#828282] font-[400] text-[18px] leading-[21.78px]' placeholder='Enter your Email'></input>
                    </div>
                  </div>
                  <div className='h-[78px] flex flex-col justify-between gap-[8px]'>
                    <p className='text-[#4B4B4B] font-[500] text-[18px] leading-[21.78px]'>Password</p>
                    <div className='flex bg-[#F8F8F8] justify-between h-[48px] border-[#BBBBBB] border-[1px] w-full items-center py-[12px] px-[24px] gap-10 rounded-[48px]'>
                      <div className='flex gap-10'>
                        <FaLock className='text-blue-600' size={20}/>
                        <input className='bg-[#F8F8F8] text-[#828282] font-[400] text-[18px] leading-[21.78px]' placeholder='Enter password'/>
                      </div>
                      <FaRegEyeSlash />
                    </div>
                  </div>
                  <div>
                    <div>
                    <input type='checkbox'/>
                    <p>Remember me</p>
                    </div>
                    <p>Forget Password ?</p>
                  </div>
                  <div>Login</div>
                  <div>
                    <hr/>
                    <p>or</p>
                    <hr/>
                  </div>
                  <div>
                    <div>
                      <p>Login with Google</p>
                    </div>
                    <div>
                      <p>Login with Facebook</p>
                    </div>
                  </div>
                  <p>Don’t have an account? <Highlightedtect text={'Sign up'}/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home