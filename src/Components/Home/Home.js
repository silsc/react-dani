import React, { Component }  from 'react';
import './home.scss';
import { useState } from 'react';
import { useTranslation, Trans } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';
import bgImg from "../../assets/images/home.jpg";
import InView from 'react-intersection-observer';


function Home({InView}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <section className={`home section ${!InView ? "theme--default" : "theme--dark"}`} id="home">
      <Header/>
      <div className='home-container'>
        <img src={bgImg} className='home-bg-img'/>
        <div className='home-title-container'>
          <Fade triggerOnce>
          <h1 className='home-title-line1'>{t("home.title.line1")}</h1>
          </Fade>
          <Fade delay={200} triggerOnce>
            <h1 className='home-title-line2'>
            <Trans i18nKey="home.title.line2" components={{oposite: <span className='oposite' />}}/></h1>
          </Fade>
        </div>
        <div className='home-text-container'>
          <Fade delay={300} triggerOnce>
            <p className='home-text-p'>{t("home.text-1")}</p>
            <p className='home-text-p'>{t("home.text-2")}</p>
          </Fade>
          <Fade delay={300} triggerOnce>
          <p className='home-text-p home-text-p--black'>{t("home.text-3")}</p>
          </Fade>

        </div>
      </div>
    </section>
  );
}

export default Home;