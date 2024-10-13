import React from 'react'
import './Cardsofdashboard.css'
const Cardsofdashboard = ({amt, title, icon,dc}) => {
  return (
    <div className='main'>
      <div className='m2'>
        <div className={`icon ${dc}`}>
        {icon}
        </div>
        <div className='data'>
          <p className='amt'>{amt}</p>
          <p className='title'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Cardsofdashboard

