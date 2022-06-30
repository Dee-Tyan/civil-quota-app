import React from 'react'
import logo from "../assets/cd_logo.png"
import profile from "../assets/profilebg.png"

function Header() {
  return (
    <div className='flex justify-between h-24 py-5 px-9 shadow-md space-y-3 space-x-8 bg-snow'>
        <img src={logo} />
        
        <div className=' flex justify-end rounded'>
        <h6 className='my-2.5'>Become a sponsor</h6>
        <img src={profile} className='max-h-12 my-0.5' />
        </div>
    </div>
  )
}

export default Header