import React from 'react'
import profilecard from "../../assets/trainee.jpg"
function Profile() {
  return (
    <div className="w-44 text-xs">
    <img src={profilecard} className="w-full rounded-lg" />
    <p className="text-mblue"> Grace Achi</p>
    <div className="block justify-center items-center ">
        <span className="text-bgray">Age: 6 </span>
        <p className="text-bgray">Location: Lagos</p>
    </div>
    
    <p><span className="text-mblue">When I grow up I want to be like: Mosh Hamedani ⭐ </span></p>
</div>
  )
}

export default Profile