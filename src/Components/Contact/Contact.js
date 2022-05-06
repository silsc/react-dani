import React, { Component }  from 'react';
import './contact.scss';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
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
    <section ref={ref} className={`contact section ${ props.inView ? "theme--dark" : "theme--default"}`} id="contact" style={bgStyle}>
      <Header/>
      <div className='contact-container'>
        <div className='contact-info'>
          <h1 className='contact-info--hero only'>{t("contact.hero")}</h1>
          <div className='contact-info--location'>
            <Location className='svg'/>
            <p className='contact-info--text'>{t("contact.location")}</p>
          </div>
          <div className='contact-info--email'>
            <Email className='svg'/>
            <p className='contact-info--text' onClick={() => window.location = 'mailto:yourmail@gmail.com'}>{t("contact.email")}</p>

          </div>
        </div>
        <div className='contact-form'>
          <h2 className='contact-form--title title'>{t("contact.title")}</h2>
          <p className='contact-form--header'>{t("contact.header")}
          </p>
          <Form></Form>
        </div>

      </div>
      
      
    </section>
  );
})

export default Contact;