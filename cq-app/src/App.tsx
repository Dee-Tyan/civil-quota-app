import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Pages/Home/Homepage"
import Layout from './components/Layout/Layout';
import './App.css';


const App = () => {

  return (
    <BrowserRouter>
    <Routes>

        <Route path="/home" element={<Layout><Homepage /></Layout>} />
  
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
