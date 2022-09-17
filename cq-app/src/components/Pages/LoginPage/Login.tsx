import React, {useContext, useState} from "react";
import { AuthContext } from "../../../context/AuthContext";
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Link } from "react-router-dom";

const Login = () => {
  const { dispatch } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const login = async() => {
 
  try {
    const response = await axios.post("http://localhost:5000/login/user-login", {email: email, password: password}) 
    if(response.data.msg === "error! wrong username or password") {
      toast.error(response.data.msg)
    }

    dispatch({type: "LOGIN", payload: response.data.msg[0]})
    console.log("response: ",response)
  } catch (error) {
    if(error instanceof Error) {
      toast.error(error.message)
    } 
  }
  

  

  
 }

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(email)
  console.log(password)
  login()

  
}
  return (
    <div>
      <section
        className="flex justify-center py-4 xl:py-5"
      >
        <div className="container">
          <div className="grid row-auto mb-2 ">
            <div className="text-center mx-auto md:col-span-8 xl:col-span-6 px-4">
              <h2 className="text-4xl mb-2">Log In</h2>
              <p className="flex flex-wrap">
                Log in to your account to access the full features.
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
                  <form className="flex flex-col mx-10 my-6 " method="post"onSubmit={handleSubmit} >
                    <label className="grid text-sm text-dark">
                      Email
                      <input
                        className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                        type="email"
                        name="email"
                        placeholder="myemail@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </label>
                    <label className="grid text-sm text-dark mb-4 my-4">
                      Password
                      <input
                        className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </label>
                    <label className="mt-4 mb-3 flex justify-center text-center">
                      <button
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 text-white w-full px-2 py-2 rounded-md"
                        type="submit"
                      >
                        Login
                      </button>
                    </label>
                    <Link to="/users" className="text-center text-sm"> Forgot your password?</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
     
    </div>
  );
};

export default Login;




// import React, { useState, useContext, useEffect } from "react";
// import { ChangeEvent, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import { AuthContext } from "../../context/AdminContext";
// import axios from "axios";
// import LoginNav from "../../components/LoginNavBar/LoginNav";
// import adminCss from "./adminlogin.module.css";

// interface Login {
//   email: string;
//   password: string;
// }

// const Adminlogin = (props: Login) => {
//   const navigate = useNavigate();
//   const { dispatch } = useContext(AuthContext);
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     try {
//       const response = await axios.post(
//         "https://appoga.herokuapp.com/admin/login",
//         {
//           email: credentials.email,
//           password: credentials.password,
//         },
//       );

//       // if(response.)

//       const token = response.data.token;
//       const userObj = jwtDecode(token);
//       console.log("newUserToken: ", userObj);

//       dispatch({ type: "GET_TOKEN", payload: userObj });
//       navigate("/admin/dashboard");
//     } catch (error: any) {
//       if (error) {
//         console.log(error.response.data.msg);
//         setError(error.response.data.msg);
//       }
//     }
//   };

//   useEffect(() => {
//     setError("");
//   }, [credentials.email, credentials.password]);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(credentials);
//     login();
//   };

//   const url = "localhost:1000/admin/login";

//   // axios
//   //   .post("http://localhost:1000/admin/login", {
//   //     email: credentials.email,
//   //     password: credentials.password,
//   //   })
//   //   .then((response) => console.log(response.data))
//   //   .catch((err) => console.log(err));

//   return (
//     <div className={adminCss.overallContainer}>
//       <div>
//         <LoginNav />
//       </div>

//       <div className={adminCss.formDesign}>
//         <form className={adminCss.formStyle} onSubmit={handleSubmit}>
//           {error && <p>{error}</p>}
//           <label htmlFor="email" className={adminCss.inputLabel}>
//             Email
//           </label>
//           <input
//             value={credentials.email}
//             name="email"
//             className={adminCss.inputField}
//             onChange={handleChange}
//           />
//           <div className={adminCss.meta} />

//           <label htmlFor="password" className={adminCss.inputLabel}>
//             Password
//           </label>
//           <input
//             type="password"
//             value={credentials.password}
//             name="password"
//             className={adminCss.inputField}
//             onChange={handleChange}
//           />

//           <div className={adminCss.meta} />

//           <div className={adminCss.inputRem}>
//             {/* <input type="checkbox" value="rmb" className="chk" id="rem" onClick= {handleSubmit} /> */}
//             <label className={adminCss.inputLabelCheck} htmlFor="rmb">
//               {" "}
//               Remember me
//             </label>

//             <p className={adminCss.lowerChecks}> Forgot password?</p>
//           </div>

//           <button type="submit" className={adminCss.btn}>
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default Adminlogin;