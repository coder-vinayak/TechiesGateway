import React from 'react'
import Navbar from '../Common/Navbar'
import SignupForm from '../SignupComponent/SignupForm'


const Signup = () => {
  return (
    <>
 <Navbar/>
 <div id="img"
        className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]" // Add margin-top here
      >
        <SignupForm/>
      </div>

    </>
  )
}

export default Signup