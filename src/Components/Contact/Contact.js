import React, { Component }  from 'react';
import './contact.scss';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { useInView, InView } from "react-intersection-observer";
import Header from '../Header/Header';
import Form from '../Form/Form';
import contactImg from '../../assets/images/contact.png';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';


const bgStyle = {
  backgroundImage: 'url(' + contactImg + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};


const Contact = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <section className={`contact section ${ props.inView ? "theme--dark" : "theme--default"}`} id="contact" style={bgStyle}>
      <Header/>
      <div className='contact-container'>
        <div className='contact-info'>
          <Fade>
            <h1 className='contact-info--hero only'>{t("contact.hero")}</h1>
          </Fade>
          <Fade cascade>
                <div className='contact-info--location'>
                  <Location className='svg'/>
                  <p className='contact-info--text'>{t("contact.location")}</p>
                </div>
                <div className='contact-info--email'>
                  <Email className='svg'/>
                  <p className='contact-info--text' onClick={() => window.location = 'mailto:yourmail@gmail.com'}>{t("contact.email")}</p>
                </div> 
          </Fade>
        </div>
        <Fade cascade delay={300} className="contact-form--container">
          <div className='contact-form'>
          <InView as="div" onChange={props.setInView}>
              {({ ref, inView }) => ( 
              <h2 className='contact-form--title title' ref={ref}>{t("contact.title")}</h2>
            )}
            </InView>
            <p className='contact-form--header'>{t("contact.header")}
            </p>
            <Form></Form>
          </div>
        </Fade>
      </div>
      
      
    </section>
  );
})

export default Contact;