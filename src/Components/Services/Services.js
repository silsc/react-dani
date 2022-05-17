import './services.scss';
import React,{ useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';


const Services = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
    <section ref={ref} className={`services section ${ props.inView ? "theme--dark" : "theme--default"}`} id="services">
      <Header/>
      <Fade>
        <h2 className='services-title title'>{t("services.title")}</h2>
      </Fade>
      <Fade delay={200}>
        <div className='services-card'>
          <h3 className='services-card--title'>{t("services.service-1.title")}</h3>
          <p className='services-card--text'>{t("services.service-1.text")}</p>
        </div>
      </Fade>

      <Fade delay={250}>
        <div className='services-card'>
          <h3 className='services-card--title'>{t("services.service-2.title")}</h3>
          <p className='services-card--text'>{t("services.service-2.text")}</p>
        </div>
      </Fade>

    </section>
  );
})

export default Services;