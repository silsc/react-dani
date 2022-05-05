import React, { Component }  from 'react';
import './policy.scss';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';

function Policy() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <section className={`policy section theme--dark`}>
      <Header/>
      <div className='policy-container'>
        <h2 className='about-header title'>{t("policy.header")}</h2>
        <p className='policy-date'>{t("policy.date")}</p>
        <p className='policy-text'>{t("policy.text-1")}</p>
        <p className='policy-text'>{t("policy.text-2")}</p>
        <p className='policy-text'>{t("policy.text-3")}</p>
      </div>
      
    </section>
  );
}

export default Policy;