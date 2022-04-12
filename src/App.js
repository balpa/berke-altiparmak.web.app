// @author: Berke Altıparmak
//  You may use, distribute and modify this code under the
//  terms of the Beerware license, which unfortunately won't be
//  written for another century.
//  ----------------------------------------------------------------------------
//  "THE BEER-WARE LICENSE" (Revision 42):
//  <berkealtiparmak@outlook.com> wrote this file.  As long as you retain this notice you
//  can do whatever you want with this stuff. If we meet some day, and you think
//  this stuff is worth it, you can buy me a beer in return.   Berke Altıparmak
//  ----------------------------------------------------------------------------


import './App.css';
import React from 'react';
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects';
import More from './pages/More'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path='/more' element={<More />} />
    </Routes>
  );
}

export default App;
