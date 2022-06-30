import React from 'react'
import logo from "../assets/cd_logo.png"
import profile from "../assets/profilebg.png"

function Header() {
  return (
    <div className='flex justify-between h-24 py-5 px-9 shadow-md space-y-3 space-x-8 bg-snow'>
        <img src={logo} />
        
        <div className=' flex justify-end'>
        <div className='flex items-center rounded-lg mx-4 bg-gradient-to-r from-cyan-500 to-blue-500'>
        <p className='text-snow px-2 text-sm' >Become a sponsor</p>
        </div>
        
        <img src={profile} className='max-h-14 my-0.5' />
        </div>
    </div>
  )
}

export default Header