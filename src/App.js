import React, { useState, useEffect, useRef }  from 'react';
import './App.scss';
import { useInView } from "react-intersection-observer";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Reviews';


export default function App() {
  const [ darkTheme, setDarkTheme ] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5 });

  return ( 
    <div className="App">
      <Navbar theme={darkTheme}/>
      <Home theme={darkTheme} ref={ref} id="section-home"/>
      <Services theme={darkTheme} id="section-2"/>
      <About theme={darkTheme} id="section-3"/>
      <Reviews theme={darkTheme} id="section-4"/>
    </div>
  );
}


