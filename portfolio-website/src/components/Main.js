import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';


const Main = () => {
  return (
    <Routes>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
    </Routes>
  );
}

export default Main;