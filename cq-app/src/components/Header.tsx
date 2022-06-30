import React from 'react'
import logo from "../assets/cd_logo.png"

function Header() {
  return (
    <div className='flex h-28 py-5 px-9 shadow-md'>
        <img src={logo} />
        
    </div>
  )
}

export default Header