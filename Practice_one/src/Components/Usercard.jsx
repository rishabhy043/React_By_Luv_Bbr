import React from 'react'
import rish from '../assets/rish.jpg'
import "./Usercard.css"

const Usercard = () => {
  return (
    <div className='user_name'>
        <p id='hii'>I Am Rishabh yadav , From Sultanpur</p>
        <img id='img1' src={rish} alt="Rishabh" />
    </div>
   
  )
}

export default Usercard