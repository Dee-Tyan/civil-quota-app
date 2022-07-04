import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Pages/Home/Homepage";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/LoginPage/Login";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
