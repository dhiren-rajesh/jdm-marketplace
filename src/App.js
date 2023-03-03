import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NSX from './components/Pages/NSX';
import Supra from './components/Pages/Supra';
import Skyline from './components/Pages/Skyline';
import RX7 from './components/Pages/RX7';
import EvoIX from './components/Pages/EvoIX';
import YZRM1 from './components/Pages/YZRM1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/NSX" element={<NSX/>}/>
          <Route path="/Supra" element={<Supra/>}/>
          <Route path="/Skyline" element={<Skyline/>}/>
          <Route path="/RX7" element={<RX7/>}/>
          <Route path="/EvoIX" element={<EvoIX/>}/>
          <Route path="/YZRM1" element={<YZRM1/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
