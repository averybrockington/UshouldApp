import React from 'react';
import './app.css';
import SignPage from './components/loginPage/SignPage.jsx';
import LandingPage from './components/LandingPage/landingPage.jsx';  
import HomePage from './components/homePage/HomePage.jsx';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignPage />} />
       {/*  <Route path="/create" element= {<CreateRec />} />
        <Route path= "/friends" element= {<Friends />} />
       <Route path= "/reviews" element= {<AllReviews />} /> */}
      </Routes>
   
  );
}
