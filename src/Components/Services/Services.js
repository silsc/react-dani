import './services.scss';
import React,{ useState, useEffect } from 'react';
import { useTranslation, Trans } from "react-i18next";
import { useInView, InView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import ContactBtn from '../ContactBtn/ContactBtn';

const Services = React.forwardRef((props, ref ) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
      <section className={`services section ${ props.inView ? "theme--dark" : "theme--default"}`} id="services">
      <Fade>
        <h2 className='services-title title'>{t("services.title")}</h2>
      </Fade>
      <div className='services-cards'>
        <Fade delay={200} className='services-card-wrapper card-1'>
          <article className='services-card card-1'>
            <h3 className='services-card--title'>{t("services.service-1.title")}</h3>
            <div className='services-card--text'>
              <p className='services-card--text'><Trans i18nKey="services.service-1.text-1" components={{bold: <span className='bold' />}}/></p>
            </div>
          </article>
        </Fade>
        <svg width="327" className='card-2' height="109" viewBox="0 0 327 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="327" y2="0.5" stroke="black"/>
          <line x1="326.5" y1="109" x2="326.5" y2="1" stroke="black"/>
        </svg>
        <svg width="327" height="109"  className='card-3' viewBox="0 0 327 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="327" y2="-0.5" transform="matrix(-1 0 0 1 327 1)" stroke="black"/>
          <line y1="-0.5" x2="108" y2="-0.5" transform="matrix(0 -1 -1 0 0 109)" stroke="black"/>
        </svg>
        <Fade delay={200} className='services-card-wrapper card-4'>
          <InView as="div" onChange={props.setInView}>
          {({ ref, inView }) => ( 
            <article className='services-card card-2' ref={ref}>
              <h3 className='services-card--title'>{t("services.service-2.title")}</h3>
              <div className='services-card--text'>
                <p className='services-card--text'><Trans i18nKey="services.service-2.text-1" components={{bold: <span className='bold' />}}/></p>
              </div>
            </article>
            )}
          </InView> 
        </Fade>
        <Fade delay={200} className='services-card-wrapper card-5'>
          <article className='services-card card-3'>
            <h3 className='services-card--title'>{t("services.service-3.title")}</h3>
            <div className='services-card--text'>
              <p className='services-card--text'><Trans i18nKey="services.service-3.text-1" components={{bold: <span className='bold' />}}/></p>
            </div>
          </article>
        </Fade>
        <svg width="327" height="109"  className='card-6' viewBox="0 0 327 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="327" y2="0.5" stroke="black"/>
          <line x1="326.5" y1="109" x2="326.5" y2="1" stroke="black"/>
        </svg>
        <div className='services-contact card-7'>
          <ContactBtn/>
        </div>
        <Fade delay={200} className='services-card-wrapper card-8'>
          <article className='services-card card-3'>
            <h3 className='services-card--title'>{t("services.service-4.title")}</h3>
            <div className='services-card--text'>
              <p className='services-card--text'><Trans i18nKey="services.service-4.text-1" components={{bold: <span className='bold' />}}/></p>
            </div>
          </article>
        </Fade>
      </div>


    </section>
  );
})

export default Services;