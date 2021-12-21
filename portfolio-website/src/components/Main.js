import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';


const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  );
}

export default Main;