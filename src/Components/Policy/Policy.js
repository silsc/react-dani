import React, { useState, useEffect, useRef }  from 'react';
import './policy.scss';
import { InView } from 'react-intersection-observer'
import Navbar from '../Navbar/Navbar';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';

function Policy() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  const [inView, setInView] = useState();

  useEffect(() => {
    document.documentElement.classList.add(`${window.innerWidth >= 760 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`)
    return () => { document.documentElement.classList.remove(`${window.innerWidth >= 760 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`) }
  });

  return (
    <>
    <Navbar inView={inView} />

    <section className={`policy section`}>
      <Header/>
      <div className='policy-container'>
        <h2 className='about-header title'>{t("policy.header")}</h2>
        <p className='policy-date'>{t("policy.date")}</p>
        <p className='policy-text'>{t("policy.text-1")}</p>
        <p className='policy-text'>{t("policy.text-2")}</p>
        <p className='policy-text'>{t("policy.text-3")}</p>
      </div>
      
    </section>
    </>

  );
}

export default Policy;