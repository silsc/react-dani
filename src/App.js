import React, { useState, useEffect, useRef }  from 'react';
import './App.scss';
import { InView } from 'react-intersection-observer'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import Work from './Components/Work/Work';

const App = () => {
  const [inView, setInView] = useState();

  useEffect(() => {
    document.documentElement.classList.add(`${!inView ? "theme--default" : "theme--dark"}`)
    return () => { document.documentElement.classList.remove(`${!inView ? "theme--default" : "theme--dark"}`) }
  });
  
  return ( 
    <div className={`App ${!inView ? "theme--default" : "theme--dark"}`} onScroll={() => console.log('Inview:', inView)} >
      <Navbar inView={inView} />
      
      <Home/>
      
      <InView as="div" onChange={setInView}>
            {({ ref, inView }) => (
              <Services ref={ref} inView={inView} delay={500} id="section-2" />
            )}
      </InView>

      <About inView={inView} id="section-3"/>

      <InView as="div" onChange={setInView}>
            {({ ref, inView }) => (
              <Work ref={ref} inView={inView} delay={500} id="section-5" />
            )}
      </InView>
      
      <Reviews id="section-4"/>

      <InView as="div" onChange={setInView}>
            {({ ref, inView }) => (
              <Contact ref={ref} inView={inView} delay={500} id="section-5" />
            )}
      </InView>

    </div>
  );
}

export default App

