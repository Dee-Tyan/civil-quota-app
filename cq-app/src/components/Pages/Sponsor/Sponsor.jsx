import React from 'react'
import SignUp from '../SignUp/SignUp'

const Sponsor = () => {
  return (
    <div>

    <section>
    <SignUp />

    

    </section>
    <section className="py-4 xl:py-5 mx-0 flex items-center justify-center">
        <div className="container ">
            <div className="bg-gradient-to-r from-gray-100 via-cyan-500 to-blue-500 border rounded border-2 border-light flex flex-col justify-between items-center lg:flex-row p-4 lg:p-5">
                <div className="text-center lg:text-start py-3 lg:py-1">
                    <h2 className="font-bold mb-2 text-3xl"><strong>Subscribe to our newsletter</strong></h2>
                    <p className="mb-0 text-base">Stay up to date with the community.</p>
                </div>
                <div className="flex justify-center flex-wrap my-2">
                    <input className="rounded px-2" type="email" placeholder="Your Email"/>
                    <input type='submit' value='Subscribe' className="my-2 text-white mr-2 px-2 cursor-pointer" />
                    
                    
                </div>
            </div>
        </div>
    </section>

  

    </div>
  )
}

export default Sponsor