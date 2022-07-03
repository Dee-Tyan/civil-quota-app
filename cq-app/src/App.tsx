import React, { ReactNode } from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Pages/Home/Homepage"
import Layout from './components/Layout/Layout';
import './App.css';


const App = () => {

  return (
    <>
     
      <Layout>
      <Homepage />
     </Layout>

    </>
  );
}

export default App;
