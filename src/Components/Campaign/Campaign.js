import React, { useState, useEffect, useRef }  from 'react';
import './campaign.scss';
import { InView } from 'react-intersection-observer'
import Navbar from '../Navbar/Navbar';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';
import MailchimpFormContainer from '../MailchimpFormContainer/MailchimpFormContainer';

function Campaign() {
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

    <section className={`policy section`}>
      <Header/>
      <MailchimpFormContainer />
    </section>
    </>

  );
}

export default Campaign;