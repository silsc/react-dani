import React, { Component }  from 'react';
import './home.scss';
import { useState } from 'react';
import { useTranslation, Trans } from "react-i18next";
import { HashLink } from 'react-router-hash-link';
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';
import bgImg from "../../assets/images/home.jpg";
import InView from 'react-intersection-observer';
import ContactBtn from '../ContactBtn/ContactBtn';

function Home({InView}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <section className={`home section ${!InView ? "theme--default" : "theme--dark"}`} id="home">
      <Header/>
      <div className='home-container'>
        <Fade triggerOnce>
          <h1 className='home-title'>{t("home.title")}</h1>
        </Fade>
        <div className='home-text-container'>
        <Fade delay={300} triggerOnce>
            <p className='home-subtitle home-text-p--gray'>{t("home.subheader")}</p>
          </Fade>
          <Fade delay={300} triggerOnce>
            <div className='home-text-p'>
              <p ><Trans i18nKey="home.text-1.line-1" components={{bold: <span className='bold' />}}/></p>
              <p ><Trans i18nKey="home.text-1.line-2" components={{bold: <span className='bold' />}}/></p>
              <p ><Trans i18nKey="home.text-1.line-3" components={{bold: <span className='bold' />}}/></p>
            </div>

          </Fade>
          <Fade delay={300} triggerOnce>
            <p className='home-text-p home-text-p--black'>{t("home.text-2")}</p>
          </Fade>
          <ContactBtn/>
        </div>
      </div>
      <div className='home-bg-img' style={{ backgroundImage: `url(${bgImg})` }}></div>
    </section>
  );
}

export default Home;