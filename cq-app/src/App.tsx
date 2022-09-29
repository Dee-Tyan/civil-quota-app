import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {useContext} from "react"
import Homepage from "./components/Pages/Home/Homepage";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/LoginPage/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import ViewTalent from "./components/Pages/ViewTalent/ViewTalent";
import Sponsor from "./components/Pages/Sponsor/Sponsor";
import "./App.css";
import Main from "./components/Pages/Main/Main";
import {AuthContext} from "./context/AuthContext"

const App = () => {

  const {user} = useContext(AuthContext)
  console.log("user: ", user)
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={user ? <Main/> : <Navigate to="/signup" />}> 
          <Route path="" element={<ViewTalent />} />

        </Route>
      </Routes>
    
    
      {/* <Layout>
        <Routes>
          <Route path="/home" element={<Homepage />} />
         
          <Route path="/signup" element={<SignUp />} />
          <Route path="/view" element={<ViewTalent />} />
          <Route path="/sponsor" element={<Sponsor />} />
          
        </Routes>
      </Layout> */}
    </BrowserRouter>
  );
};

export default App;
