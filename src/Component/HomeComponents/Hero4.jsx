import React from 'react'
import '../pages/Home.css'

function Hero4() {
  return (
    <div>
      <div className='flex flex-col gap-3 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
        <div className='mt-[36px] px-6 py-3 border-0 bg-[#3D55CC1A] w-fit flex gap-[10px] rounded-[24px] text-[#3D55CC] font-[400] text-[18px] text-center leading-[21.78px]'>
          Why choose us
        </div>
        <p className='text-[#000000] font-[600] text-[32px] text-center leading-[38.73px]'>
          Superior Social Media Solutions
        </p>
        <p className='text-[#828282] font-[400] text-[18px] text-center leading-[21.78px]'>
          Fast results, customizable options, and exceptional support. Perfect for influencers, businesses, and resellers.
        </p>

       <div className='flex flex-row gap-16 mt-7'>
        <div className='w-[377px] h-[217px] border border-[#C8C8C8] rounded-[24px] shadow-[0px_4px_46.5px_0px_rgba(0,0,0,0)] flex flex-col justify-center items-center p-6'>
          {/* Icon */}
          <div className='w-12 h-12 bg-[#4B58F4] relative  rounded-full flex justify-center items-center'>
            <div id='imgA' className='w-12 h-12 absolute left-[0.4rem] top-2 bg-no-repeat ' ></div>
          </div>

          {/* Text */}
          <div className='text-center mt-4'>
            <h2 className='text-[20px] font-semibold'>Secure & Confidential</h2>
            <p className='text-[16px] text-[#707070] mt-2'>
              Enjoy peace of mind with our secure transactions and strict privacy policies.
            </p>
          </div>
        </div>

        <div className='w-[377px] h-[217px] border border-[#C8C8C8] rounded-[24px] shadow-[0px_4px_46.5px_0px_rgba(0,0,0,0)] flex flex-col justify-center items-center p-6'>
          {/* Icon */}
          <div className='w-12 h-12 bg-[#D02C5B] relative  rounded-full flex justify-center items-center'>
          <div id='imgB' className='w-12 h-12 absolute left-[0.6rem] top-2.5 bg-no-repeat ' ></div>
          </div>

          {/* Text */}
          <div className='text-center mt-4'>
            <h2 className='text-[20px] font-semibold'>24/7 Customer Support</h2>
            <p className='text-[16px] text-[#707070] mt-2'>
            Get help anytime with our round-the-clock support team.  </p>        </div>
        </div>

        <div className='w-[377px] h-[217px] border border-[#C8C8C8] rounded-[24px] shadow-[0px_4px_46.5px_0px_rgba(0,0,0,0)] flex flex-col justify-center items-center p-6'>
          {/* Icon */}
          <div className='w-12 h-12 bg-[#FFA800] relative  rounded-full flex justify-center items-center'>
          <div id='imgC' className='w-12 h-12 absolute left-[0.8rem] top-3 bg-no-repeat ' ></div>
          </div>

          {/* Text */}
          <div className='text-center mt-4'>
            <h2 className='text-[20px] font-semibold'>customizable Service</h2>
            <p className='text-[16px] text-[#707070] mt-2'>
            Tailor our services to meet your specific goals and needs.            </p>
          </div>
        </div>

       
        </div>
        

      </div>
    </div>
  );
}

export default Hero4;
