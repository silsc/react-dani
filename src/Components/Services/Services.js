import './services.scss';
import React,{ useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Header from '../Header/Header';


const Services = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
    <section ref={ref} className={`services section ${ props.inView ? "theme--dark" : "theme--default"}`}>
      <Header/>
      <h2 className='services-title title'>{t("services.title")}</h2>
      <div className='services-card'>
        <h3 className='services-card--title'>{t("services.service-1.title")}</h3>
        <p className='services-card--text'>{t("services.service-1.text")}</p>
      </div>
      <div className='services-card'>
        <h3 className='services-card--title'>{t("services.service-2.title")}</h3>
        <p className='services-card--text'>{t("services.service-2.text")}</p>
      </div>
    </section>
  );
})

export default Services;