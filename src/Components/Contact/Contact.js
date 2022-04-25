import React, { Component }  from 'react';
import './contact.scss';
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';

function Contact() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }


  return (
    <>
      <Header/>
      Contact
    </>
  );
}

export default Contact;