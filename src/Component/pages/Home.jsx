import './Home.css';
import React from 'react'
import Navbar from '../Common/Navbar'
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Highlightedtect from '../Common/Highlightedtect';

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col bg-[#FFFFFF]'>
        <Navbar/>
        <div id='img' className={"flex flex-col items-center h-[1158.13px] w-full"}>
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
          <div className='flex mt-[-40%] mb-2 items-center justify-center h-[663px] w-[746px] rounded-[24px] bg-[#F6F6F6] shadow-[0px_8px_48px_0px_#00000014]'>
            <div className='flex flex-col w-[587px] h-[591px] gap-[36px] justify-start items-center'>
              <div className='flex flex-col w-[335px] h-[59px] gap-[8px]'>
                <p className='font-semibold text-[24px] leading-[29.05px] text-center'>Login to <Highlightedtect text={'SMM panel'}/></p>
                <p className='text-[#828282] text-[18px] font-[400] leading-[21.78px]'>Welcome back! Please enter your detail </p>
              </div>
              <div className='flex flex-col items-center justify-center w-[587px] h-[296px] gap-[16px]'>
                <div className='flex flex-col w-[587px] h-[296px] gap-[36px]'>
                  <div className='h-[78px] flex flex-col justify-between gap-[8px]'>
                    <p className='text-[#4B4B4B] font-[500] text-[18px] leading-[21.78px]'>Email-ID</p>
                    <div className='flex bg-[#F8F8F8] h-[48px] border-[#BBBBBB] border-[1px] w-full items-center py-[12px] px-[24px] gap-10 rounded-[48px]'>
                      <MdEmail className='text-blue-600' size={24}/>
                      <input className='bg-[#F8F8F8] text-[#828282] font-[400] text-[18px] leading-[21.78px]' placeholder='Enter your Email'></input>
                    </div>
                  </div>
                  <div className='h-[78px] flex flex-col justify-between gap-[8px]'>
                    <p className='text-[#4B4B4B] font-[500] text-[18px] leading-[21.78px]'>Password</p>
                    <div className='flex bg-[#F8F8F8] justify-between h-[48px] border-[#BBBBBB] border-[1px] w-full items-center py-[12px] px-[24px] gap-[10px] rounded-[48px]'>
                      <div className='flex gap-10'>
                        <FaLock className='text-blue-600' size={20}/>
                        <input className='bg-[#F8F8F8] text-[#828282] font-[400] text-[18px] leading-[21.78px]' placeholder='Enter password'/>
                      </div>
                      <FaRegEyeSlash />
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex gap-[8px] w-[156px] h-[24px]'>
                    <input type='checkbox'/>
                    <p className='font-[400] text-[18px] leading-[21.78px] text-[#828282]'>Remember me</p>
                    </div>
                    <p className='text-[#3D55CC]'>Forget Password ?</p>
                  </div>
                  <div className='bg-[#3D55CC] w-full py-[12px] px-[24px] rounded-[48px] gap-[10px] h-[48px] text-center text-[#FFFFFF] leading-[21.78px] text-[18px] font-[400]'>Login</div>
                  <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-full h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span class="absolute px-4 font-[400] -translate-x-1/2 bg-[#F8F8F8] left-1/2 text-[#828282] text-[18px] leading-[21.78px] ">or</span>
                  </div>
                  <div className='flex w-full h-[48px] gap-[36px]'>
                    <div className='flex w-[275px] bg-[#F8F8F8] border-[1px] border-[#BBBBBB] px-[24px] py-[12px] gap-[10px] rounded-[48px] justify-between items-center'>
                      <FcGoogle size={24}/>
                      <p className='text-[#828282] text-[18px] font-[400] leading-[21.78px]'>Login with Google</p>
                    </div>
                    <div className='flex w-[275px] bg-[#F8F8F8] border-[1px] border-[#BBBBBB] px-[24px] py-[12px] gap-[10px] rounded-[48px] justify-between items-center'>
                    <IoLogoFacebook size={24} className='text-blue-600'/>
                      <p className='text-[#828282] text-[18px] font-[400] leading-[21.78px]'>Login with Facebook</p>
                    </div>
                  </div>
                  <p className='text-[#828282] font-[400] text-[18px] leading-[21.78px] text-center'>Don’t have an account? <Highlightedtect className='font-[500]' text={'Sign up'}/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[277px] flex flex-col  gap-[36px] justify-center items-center border-b-[2px]'>
          <p className='text-center font-[600] text-[32px] leading-[38.73px]'>Our <Highlightedtect text={'Trusted Partners'}/> - Empowering Success Together</p>
          <div className='h-[102px] w-full flex items-center justify-center'>
          <div id='img2' className='h-[36.85px] w-[1218.63px]'></div>
          </div>
        </div>
        <div className='flex flex-col gap-[36px]'>
          <div className='flex flex-col gap-3 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
            <div className='mt-[36px] px-6 py-3 border-0 bg-[#3D55CC1A] w-fit flex gap-[10px] rounded-[24px] text-[#3D55CC] font-[400] text-[18px] text-center leading-[21.78px]'>Features</div>
            <p className='text-[#000000] font-[600] text-[32px] text-center leading-[38.73px]'>Elevate Your Social Media Strategy</p>
            <p className='text-[#828282] font-[400] text-[18px] text-center leading-[21.78px]'>Boost your social media with instant results and 24/7 support. Ideal for influencers, businesses, and resellers.</p>
          </div>
          <div className='w-[1240px] h-fit flex flex-wrap mx-auto  justify-center items-center gap-[36px]'>
            <div className='gradient-border w-[602px] h-[372px] flex justify-center items-center'>
              <div className='w-[601px] h-[371px] rounded-[24px] justify-center items-center pt-4 flex flex-col gap-[10px]  bg-[#F9F9FF] overflow-hidden'>
                <p className='font-[600] text-[32px] leading-[38.73px] mt-2'>User-Friendly Dashboard</p>
                <p className='text-[#6F6C8F] font-[400] text-[18px] leading-[21.78px] w-[517px] mt-2 h-[44px]'>An intuitive, easy-to-navigate interface for managing orders and tracking progress.</p>
                <div id='img3'></div>
              </div>
            </div>
            <div className='gradient-border w-[602px] h-[369px] flex justify-center items-center'>
              <div className='w-[601px] h-[368px] rounded-[24px] items-center justify-center flex flex-col gap-[10px]  bg-[#F9F9FF] overflow-hidden pt-4'>
                <p className='font-[600] text-[32px] leading-[38.73px] mt-2'>Automated Order Processing</p>
                <p className='text-[#6F6C8F] font-[400] text-[18px] leading-[21.78px] w-[517px] mt-2 h-[44px]'>Instant or scheduled delivery of services, with orders processed automatically.</p>
                <div id='img4'></div>
              </div>
            </div>
            <div className='gradient-border w-[342px] h-[380px] flex justify-center items-center'>
              <div className='absolute  w-[341px] h-[379px] rounded-[24px]  flex flex-col gap-[10px]  bg-[#F9F9FF] pt-4 overflow-hidden justify-center items-center'>
                <p className='font-[600] text-[32px] leading-[38.73px] mt-2'>API Integration</p>
                <p className='text-[#6F6C8F] font-[400] text-[18px] leading-[21.78px] w-[283px] mt-2 h-[88px]'>API support for developers and resellers to integrate the panel’s services into their own platforms.</p>
                <div id='img5'></div>
              </div>
            </div>
            <div className='gradient-border w-[484px] h-[379px] flex justify-center items-center'>
              <div className='w-[483px] h-[378px] rounded-[24px]  flex flex-col gap-[10px]  bg-[#F9F9FF] pt-4 overflow-hidden justify-center items-center'>
                <p className='font-[600] text-[32px] leading-[38.73px] mt-2'>Secure and Confidential</p>
                <p className='text-[#6F6C8F] font-[400] text-[18px] leading-[21.78px] w-[409px] mt-2 h-[44px]'>Secure payment gateways and strict privacy policies to protect user information.</p>
                <div id='img6'></div>
              </div>
            </div>
            <div className='gradient-border w-[342px] h-[380px] flex justify-center items-center'>
              <div className='w-[341px] h-[379px] rounded-[24px]  flex flex-col gap-[10px]  bg-[#F9F9FF] pt-4 overflow-hidden justify-center items-center'>
                <p className='font-[600] text-[32px] leading-[38.73px] mt-2 ml-6'>Customizable Service Packages</p>
                <p className='text-[#6F6C8F] font-[400] text-[18px] leading-[21.78px] w-[283px] mt-2 h-[66px]'>Ability to create custom service packages tailored to specific needs</p>
                <div id='img7'></div>
              </div>
            </div>

          </div>
          <div className='flex flex-col gap-3 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
            <div className='mt-[36px] px-6 py-3 border-0 bg-[#3D55CC1A] w-fit flex gap-[10px] rounded-[24px] text-[#3D55CC] font-[400] text-[18px] text-center leading-[21.78px]'>Why choose us</div>
            <p className='text-[#000000] font-[600] text-[32px] text-center leading-[38.73px]'>Superior Social Media Solutions</p>
            <p className='text-[#828282] font-[400] text-[18px] text-center leading-[21.78px]'>Fast results, customizable options, and exceptional support. Perfect for influencers, businesses, and resellers.</p>

            <div className='p-0 border-0 flex gap-[44px]'>
              <div className='w-[377px] h-[217px] border-[1px] rounded-[24px] shadow-[0px_4px_46.5px_0px_#00000000] border-[#C8C8C8]'></div>
            </div>

          </div>


        </div>
    </div>
  )
}

export default Home