import React, { useState, useEffect, useRef }  from 'react';
import './App.scss';
import { InView } from 'react-intersection-observer'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Estudio from './Components/Estudio/Estudio';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import Work from './Components/Work/Work';


const App = () => {
  const [inView, setInView] = useState();

  useEffect(() => {
    document.documentElement.classList.add(`${window.innerWidth >= 760 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`)
    return () => { document.documentElement.classList.remove(`${window.innerWidth >= 760 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`) }
  });
  
  return ( 
    <div className={`App ${!inView ? "theme--default" : "theme--dark"}`} >
      <Navbar inView={inView} />
      <div class="container">

        <Home/>
        
        <InView as="div" onChange={setInView}>
          {({ ref, inView }) => (
            <Work ref={ref} inView={inView} id="section-5" className="child"/>
          )}
        </InView>

        <Services inView={inView} id="section-2" />

        <Estudio inView={inView} id="section-6"/>

        <About inView={inView} id="section-3"/>

        <Reviews id="section-4"/>

        <Contact inView={inView} id="section-5" setInView={setInView}/>
      </div>

    </div>
  );
}

export default App

