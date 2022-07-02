import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/ProfileCard/Profile';
import Homepage from "./components/Pages/Home/Homepage"
import './App.css';

function App() {
  return (
    <div className="flex justify-center flex-wrap gap-10">
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    <Profile tname={'John'} age={8} location={'Abuja'} mentor={'Mosh Hamedani'} />
    
    </div>
  );
}

export default App;
