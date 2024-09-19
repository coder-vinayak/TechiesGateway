import React from 'react'
import Highlightedtext from './Highlightedtect'

function Navbar() {
  return (
    <div className='fixed z-10 top-0 w-full h-[88px] bg-[#FAFAFA] shadow-[0px_1px_56px_-20px_#00000040]'>
    <div className='w-10/12 flex mx-auto items-center  justify-between h-full'>
        <div className='text-[32px] font-semibold leading-[39.36px] '>
            SMM <Highlightedtext text='Panel'/>
        </div>  
        <div className='flex gap-[17px] items-center'>
            <ul className='list-none flex gap-[18px]'>
              <li className='py-[12px] px-[24px]'>
                Login
              </li>
              <li className='py-[12px] px-[24px]'>
                Service
              </li>
              <li className='py-[12px] px-[24px]'>
                Api
              </li>
              <li className='py-[12px] px-[24px]'>
                Terms
              </li>
            </ul>
          <div className='flex w-[105px] h-[48px] border rounded-[23px] items-center justify-center bg-[#3D55CC] py-[12px] px-[24px]'>
            SignUp
          </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar