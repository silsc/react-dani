import React, { useState, useEffect, useRef }  from 'react';
import { InView } from 'react-intersection-observer';
import './campaign.scss';
import Navbar from '../Navbar/Navbar';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import Guia2Form from '../Guia2Form/Guia2Form';

function Campaign2() {
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
      <h2 className='title'>{t("campaign2.header")}</h2>
      <Guia2Form />
    </section>
    </>

  );
}

export default Campaign2;