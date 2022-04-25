import './services.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../Header/Header';

function Services() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  const [ darkTheme, setDarkTheme ] = useState(false)
  const changeToDarkTheme = () => {
    setDarkTheme(false);
  }

  return (
    <section className={`services section ${!darkTheme ? "theme--default" : "theme--dark"}`}>
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
}

export default Services;