import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Navigation} from './components/Navigation/Navigation';
import {AboutPage}  from './pages/AboutPage/AboutPage'
import {HomePage} from './pages/HomePage/HomePage'


function App() {
  return (
    <div className="App">
    <Navigation/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} /> 
    </Routes>

    </div>
  );
}

export default App;
