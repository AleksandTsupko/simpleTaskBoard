import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { AboutPage } from './pages/AboutPage/AboutPage'
import { HomePage } from './pages/HomePage/HomePage'
import { Modal } from './components/Modal/Modal';
import { useAppSelector } from './hooks/redux';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Modal/>
    </div>
  );
}

export default App;
