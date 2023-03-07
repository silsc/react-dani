import React, { useState, useEffect, useRef }  from 'react';
import { InView } from 'react-intersection-observer';
import './campaign.scss';
import Navbar from '../Navbar/Navbar';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import Guia1Form from '../Guia1Form/Guia1Form';

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

    <section className={`campaign section`}>
      <Header/>
      <h2 className='title'>{t("campaign.header")}</h2>
      <Guia1Form />
    </section>
    </>

  );
}

export default Campaign1;