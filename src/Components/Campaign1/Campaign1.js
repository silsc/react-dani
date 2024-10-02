import React, { useState, useEffect, useRef }  from 'react';
import { InView } from 'react-intersection-observer';
import './campaign.scss';
import Navbar from '../Navbar/Navbar';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import Guia1Form from '../Guia1Form/Guia1Form';
import ContactBtn from '../ContactBtn/ContactBtn';

function Campaign1() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [inView, setInView] = useState();

  useEffect(() => {
    document.documentElement.classList.add(`${window.innerWidth >= 760 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`)
    return () => { document.documentElement.classList.remove(`${window.innerWidth >= 760 ?(!inView ? "theme--default" : "theme--dark") : "theme--dark" }`) }
  });

  return (
    <>
    <Navbar inView={inView} />
    <div className='container'>
      <section className={`campaign section`}>
        <Header/>
        <h2 className='title'>{t("campaign1.header")}</h2>
        {/* <Guia1Form /> */}
        <h3>Esta descarga no esta disponible en estos momentos.</h3>
        <h3>Si te interesa ponte en contacto conmigo.</h3>
        <a className='cta-btn link'  href="https://www.instagram.com/danisalat" target="_blank">
                {t("home.contact-btn")}
        </a>
      </section>
    </div>

    </>

  );
}

export default Campaign1;