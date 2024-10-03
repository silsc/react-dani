import React, { useState, useEffect }  from 'react';
import './oferta.scss';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import campaingtImg from '../../assets/images/campaingImg.jpeg';
import Reviews from '../Reviews/Reviews';
import Work from '../Work/Work';
import { InView } from 'react-intersection-observer'

import { InlineWidget } from "react-calendly";


const bgStyle = {
  backgroundImage: 'url(' + campaingtImg + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

function Oferta() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [inView, setInView] = useState();

  useEffect(() => {
    document.documentElement.classList.add(`${window.innerWidth >= 760 && window.innerWidth <= 1300 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`)
    return () => { document.documentElement.classList.remove(`${window.innerWidth >= 760 && window.innerWidth <= 1300 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`) }
  });


  


  return (
    <>
    <div className={`oferta--hero`} style={bgStyle}>
      <Header/>
      <div className={`oferta--hero-container`}>
        <div className={`oferta--hero-triangulo`}></div>
        <div className={`oferta--hero-overlay`}></div>
        <h3 className='oferta--hero-subtitle'>{t("oferta.subheader")}</h3>
        <h1 className='oferta--hero-title'>{t("oferta.header")}</h1>
        <iframe width="560" height="315" className='oferta--hero-video' src="https://www.youtube.com/embed/QFPdifDBC8c?si=xpdwE1SYxkqzZolQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p className='oferta--hero-scroll'><svg width="50" height="10" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.477778 0.775805C0.534325 0.657517 0.633207 0.567616 0.752744 0.525813C0.87228 0.48401 1.00272 0.493717 1.11545 0.552805L6.61372 3.43981L12.111 0.551805C12.167 0.521786 12.228 0.503696 12.2906 0.498577C12.3532 0.493458 12.4162 0.501412 12.4759 0.52198C12.5355 0.542548 12.5907 0.575324 12.6383 0.618417C12.6859 0.661511 12.7248 0.71407 12.753 0.773064C12.7811 0.832058 12.7979 0.89632 12.8022 0.962145C12.8066 1.02797 12.7986 1.09406 12.7785 1.1566C12.7585 1.21913 12.7269 1.27689 12.6855 1.32652C12.6441 1.37616 12.5938 1.4167 12.5374 1.44581L6.82691 4.44581C6.76074 4.48065 6.68774 4.49879 6.61372 4.49879C6.5397 4.49879 6.4667 4.48065 6.40053 4.44581L0.690019 1.44581C0.577438 1.38639 0.491874 1.2825 0.452088 1.1569C0.412302 1.0313 0.42154 0.894256 0.477778 0.775805V0.775805Z" fill="white"/>
          </svg>
</p>
      </div> 
    </div>
    <div className={`oferta--info-container`}>
      
        <InlineWidget url="https://calendly.com/danisalat/call45" /> 
        <Reviews id="section-4"/>
        <InView as="div" onChange={setInView}>
          {({ ref, inView }) => (
            <Work ref={ref} inView={inView} id="section-5" className="child"/>
          )}
        </InView>
   
    </div>

    
    <div className='oferta--footer'>
      <p> © Dani Salat</p>
    </div>
    
  </>

  );
}

export default Oferta;