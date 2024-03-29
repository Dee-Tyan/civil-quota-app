import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>

<section
        className="flex justify-center py-4 xl:py-5"
      >
        <div className="container">
          <div className="grid row-auto mb-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-gray-100 text-white">
            <div className="text-center mx-auto md:col-span-8 xl:col-span-6 px-4">
              <h2 className="text-4xl mb-2">Join</h2>
              <p className="flex flex-wrap">
                Sign up to join our pool of investors
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center px-4 py-4">
            <div className="md:col-span-6 xl:col-span-4 ">
              <div className="box-border mb-2 border-grey border-2 rounded">
                <div className="box-content flex flex-col items-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 rounded-full bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4em"
                      height="4em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-person px-2 py-2 text-white"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>
                  </div>
                  <form className="flex flex-col mx-10 my-6 " method="post">
                  <label className="grid text-sm text-dark opacity-50 mb-4">
                      Name
                      <input
                        className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                        type="text"
                        name="text"
                        placeholder="Maria"
                      />
                    </label>
                    <label className="grid text-sm text-dark opacity-50 mb-4 ">
                      Email
                      <input
                        className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                        type="email"
                        name="email"
                        placeholder="myemail@gmail.com"
                      />
                    </label>
                    <label className="grid text-sm text-dark opacity-50 mb-4">
                      Password
                      <input
                        className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </label>
                    <label className="mt-4 mb-3 flex justify-center text-center">
                      <button
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 text-white w-full px-2 py-2 rounded-md"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </label>
                    <p className="text-center text-sm"> Already have an account? <Link to="/login" className="text-center text-sm text-blue-400"> Login</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SignUp