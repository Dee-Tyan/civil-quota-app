import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Pages/Home/Homepage";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/LoginPage/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import ViewTalent from "./components/Pages/ViewTalent/ViewTalent";
import Sponsor from "./components/Pages/Sponsor/Sponsor";
import "./App.css";
import Main from "./components/Pages/Main/Main";
const App = () => {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Main/>}> 
          <Route path="" element={<Homepage />} />

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
