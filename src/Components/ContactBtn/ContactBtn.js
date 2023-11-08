import React, { Component }  from 'react';
import './contactBtn.scss';
import { useState } from 'react';
import { useTranslation, Trans } from "react-i18next";
import { HashLink } from 'react-router-hash-link';
import { Fade } from "react-awesome-reveal";


function ContactBtn({InView}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
          <Fade delay={300} triggerOnce className='cta-btn--container'>
            <HashLink className='cta-btn link' smooth to="/#contact">
              {t("home.contact-btn")}
            </HashLink>
          </Fade>
  );
}

export default ContactBtn;