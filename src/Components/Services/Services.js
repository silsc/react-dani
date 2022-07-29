import './services.scss';
import React,{ useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useInView, InView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';

const Services = React.forwardRef((props, ref ) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
      <section className={`services section ${ props.inView ? "theme--dark" : "theme--default"}`} id="services">
      <Header/>
      <Fade>
        <h2 className='services-title title'>{t("services.title")}</h2>
      </Fade>
      <div className='services-cards'>
        <Fade delay={200}>
          <article className='services-card'>
            <h3 className='services-card--title'>{t("services.service-1.title")}</h3>
            <div className='services-card--text'>
              <p className='services-card--text'>{t("services.service-1.text-1")}</p>
              <p className='services-card--text'>{t("services.service-1.text-2")}</p>
            </div>
          </article>
        </Fade>
        <Fade delay={200}>
          <InView as="div" onChange={props.setInView}>
          {({ ref, inView }) => ( 
            <article className='services-card' ref={ref}>
              <h3 className='services-card--title'>{t("services.service-2.title")}</h3>
              <div className='services-card--text'>
                <p className='services-card--text'>{t("services.service-2.text-1")}</p>
                <p className='services-card--text'>{t("services.service-2.text-2")}</p>
              </div>
            </article>
            )}
          </InView> 
        </Fade>
        <Fade delay={200}>
          <article className='services-card'>
            <h3 className='services-card--title'>{t("services.service-3.title")}</h3>
            <div className='services-card--text'>
              <p className='services-card--text'>{t("services.service-3.text-1")}</p>
              <p className='services-card--text'>{t("services.service-3.text-2")}</p>
            </div>
          </article>
        </Fade>
      </div>

    </section>
  );
})

export default Services;