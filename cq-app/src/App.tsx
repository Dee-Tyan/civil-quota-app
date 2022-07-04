import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Pages/Home/Homepage";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/LoginPage/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
