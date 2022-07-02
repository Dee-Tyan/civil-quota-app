import React, { ReactNode } from 'react';
import Header from './components/Header/Header';
import Profile from './components/ProfileCard/Profile';
import Homepage from "./components/Pages/Home/Homepage"
import profiledata from "./dummyprofiledata.js"
import './App.css';
import { profile } from 'console';

function App() {

  let renderProfile: ReactNode = profiledata.map(talent => {
    return <Profile tname={talent.tname} age={talent.age} location={talent.location} mentor={talent.mentor}  />
  })
  return (
    <div className="flex justify-center flex-wrap gap-5">
     
     {renderProfile}    
    </div>
  );
}

export default App;
