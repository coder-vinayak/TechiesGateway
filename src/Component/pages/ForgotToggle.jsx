import React, { useState } from 'react'
import Forgotpass from './Forgotpass'
import OtpVerification from './OtpVerification'
import Reset from './Reset'

function ForgotToggle() {

  const [fp,setFp] = useState(true);
  const [ov,setOv] = useState(false);
  const [r,setR] = useState(false);
  

  return (
    <div className=''>
      {(fp && <Forgotpass setFp ={setFp} setOv={setOv}/>)}
      {(ov && <OtpVerification setOv={setOv} setR={setR}/>)}
      {(r && <Reset/>)}
    </div>
  )
}

export default ForgotToggle