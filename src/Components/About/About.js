import React, { Component }  from 'react';
import './about.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
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
          <h2 className='about-title title'>{t("about.title")}</h2>
          <p className='about-text'>{t("about.text-1")}</p>
          <p className='about-text'>{t("about.text-2")}</p>
          <p className='about-text'>{t("about.text-3")}</p>
        </div>
        <div className='about-imgs'>
          <img src={aboutImg1} className='about-img1'/>
          <img src={aboutImg2} className='about-img2'/>
        </div>
      </div>
      
    </section>
  );
}

export default About;