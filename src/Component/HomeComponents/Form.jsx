import React, { useState } from 'react';
import '../pages/Home.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"; // Import both open and closed eye icons
import Highlightedtect from '../Common/Highlightedtect';
import { Link, useNavigate } from 'react-router-dom';

function Form({toggleForm}) {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function forgetHandler() {
    navigate('/forgotpassword')
  }
  return (
    <div className='flex items-center justify-center p-5 w-full max-w-[746px] rounded-[24px] bg-[#F6F6F6] shadow-[0px_8px_48px_0px_#00000014] mx-auto'>
      <div className='flex flex-col w-full max-w-[587px] h-auto gap-[24px] md:gap-[36px] justify-start items-center'>

        <div className='flex flex-col w-full max-w-[335px] h-auto gap-[8px]'>
          <p className='font-semibold text-[20px] md:text-[24px] leading-[25px] md:leading-[29.05px] text-center'>
            Login to <Highlightedtect text={'SMM panel'} />
          </p>
          <p className='text-[#828282] text-[16px] md:text-[18px] font-[400] leading-[19px] md:leading-[21.78px] text-center'>
            Welcome back! Please enter your detail
          </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full max-w-[587px] h-auto gap-[16px]'>
          <div className='flex flex-col w-full max-w-[587px] gap-[16px] md:gap-[36px]'>

            {/* Email Input */}
            <div className='h-auto flex flex-col justify-between gap-[8px]'>
              <p className='text-[#4B4B4B] font-[500] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px]'>Email-ID</p>
              <div className='flex bg-[#F8F8F8] h-[48px] border-[#BBBBBB] border-[1px] w-full items-center py-[12px] px-[16px] md:px-[24px] gap-4 md:gap-10 rounded-[48px] focus-within:border-blue-600'>
                <MdEmail className='text-blue-600' size={24} />
                <input
                  className='bg-[#F8F8F8] text-[#828282] w-full font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] focus:outline-none focus:border-transparent'
                  placeholder='Enter your Email'
                />
              </div>
            </div>

            {/* Password Input */}
            <div className='h-auto flex flex-col justify-between gap-[8px]'>
              <p className='text-[#4B4B4B] font-[500] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px]'>Password</p>
              <div className='flex bg-[#F8F8F8] justify-between h-[48px] border-[#BBBBBB] border-[1px] w-full items-center py-[12px] px-[16px] md:px-[24px] gap-4 md:gap-10 rounded-[48px] focus-within:border-blue-600'>
                <div className='flex gap-4 md:gap-10'>
                  <FaLock className='text-blue-600' size={20} />
                  <input
                    className='bg-[#F8F8F8] text-[#828282] w-full font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] focus:outline-none focus:border-transparent'
                    placeholder='Enter password'
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                  />
                </div>
                <div onClick={togglePasswordVisibility} className='cursor-pointer'>
                  {showPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
                </div>
              </div>
            </div>

            {/* Remember Me and Forget Password */}
            <div className='flex justify-between w-full'>
              <div className='flex gap-[8px]'>
                <input type='checkbox' />
                <p className='font-[400] text-[14px] md:text-[18px] leading-[19px] md:leading-[21.78px] text-[#828282]'>Remember me</p>
              </div>
              <button className='text-[#3D55CC] text-[14px] md:text-[18px]' onClick={forgetHandler}>Forget Password?</button>
            </div>

            {/* Login Button */}
            <div className='bg-[#3D55CC] w-full py-[12px] px-[24px] rounded-[48px] gap-[10px] h-[48px] text-center text-[#FFFFFF] leading-[21.78px] text-[16px] md:text-[18px] font-[400] cursor-pointer'>
              Login
            </div>

            {/* Divider */}
            <div className="inline-flex items-center justify-center w-full relative">
              <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-4 font-[400] text-[16px] md:text-[18px] -translate-x-1/2 bg-[#F8F8F8] left-1/2 text-[#828282]">or</span>
            </div>

            {/* Login with Google and Facebook */}
            <div className='flex w-full flex-col md:flex-row gap-[16px] md:gap-[36px]'>
              <div className='flex w-full md:w-[275px] bg-[#F8F8F8] border-[1px] border-[#BBBBBB] px-[24px] py-[12px] gap-[10px] rounded-[48px] justify-center md:justify-between items-center'>
                <FcGoogle size={24} />
                <p className='text-[#828282] text-[16px] md:text-[18px] font-[400] leading-[21.78px]'>Login with Google</p>
              </div>
              <div className='flex w-full md:w-[275px] bg-[#F8F8F8] border-[1px] border-[#BBBBBB] px-[24px] py-[12px] gap-[10px] rounded-[48px] justify-center md:justify-between items-center'>
                <IoLogoFacebook size={24} className='text-blue-600' />
                <p className='text-[#828282] text-[16px] md:text-[18px] font-[400] leading-[21.78px]'>Login with Facebook</p>
              </div>
            </div>

            {/* Sign Up Prompt */}
            <p className='text-[#828282] font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] text-center'>
              Don’t have an account?   <button onClick={toggleForm}><Highlightedtect className='font-[500]'  text={'Sign up'} /></button> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
