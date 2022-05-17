import React, { Component }  from 'react';
import './about.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';
import aboutImg1 from "../../assets/images/about-1.png";
import aboutImg2 from "../../assets/images/about-2.png";

function About({inView}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <section className={`about section ${!inView ? "theme--default" : "theme--dark"}`} id="about">
      <Header/>
      <div className='about-container'>
        <div className='about-content'>
          <Fade>
            <h2 className='about-title title'>{t("about.title")}</h2>
          </Fade>
          <Fade delay={200}>
            <p className='about-text'>{t("about.text-1")}</p>
          </Fade>
          <Fade delay={250}>
            <p className='about-text'>{t("about.text-2")}</p>
          </Fade>
          <Fade delay={300}>
            <p className='about-text'>{t("about.text-3")}</p>
          </Fade>
        </div>
        
        <div className='about-imgs'>
          <Fade cascade triggerOnce>
              <img src={aboutImg1} className='about-img1'/>
              <img src={aboutImg2} className='about-img2'/>
          </Fade>
        </div>
        
      </div>
      
    </section>
  );
}

export default About;