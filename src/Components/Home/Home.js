import React, { Component }  from 'react';
import './home.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import bgImg from "../../assets/images/dani.png";


function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  const [ darkTheme, setDarkTheme ] = useState(false);

  const changeToDarkTheme = () => {
    setDarkTheme(true);
  }

  return (
    <section className={`home section ${!darkTheme ? "theme--default" : "theme--dark"}`}>
      <Header/>
      <div className='home-container'>
        <img src={bgImg} className='home-bg-img'/>
        <div className='home-title-container'>
          <p className='home-title-year'>{t("home.title-year")}</p>
          <h1 className='home-title-line1'>{t("home.title.line1")}</h1>
          <h1 className='home-title-line2'>{t("home.title.line2")}</h1>
        </div>
        <div className='home-text-container'>
          <p className='home-text-p'>{t("home.text-1")}</p>
          <p className='home-text-p'>{t("home.text-2")}</p>
          <p className='home-text-p'>{t("home.text-3")}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;