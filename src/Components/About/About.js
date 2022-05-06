import React, { Component }  from 'react';
import './about.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import bgImg from "../../assets/images/dani.png";

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
          <img src={bgImg} className='about-img1'/>
          <img src={bgImg} className='about-img2'/>
        </div>
      </div>
      
    </section>
  );
}

export default About;