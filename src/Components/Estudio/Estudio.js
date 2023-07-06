import React, { Component }  from 'react';
import './estudio.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Gallery from '../Gallery/Gallery';
import estudioImg1 from "../../assets/images/about-1.png";
import estudioImg2 from "../../assets/images/about-2.png";
import estudioImg3 from "../../assets/images/about-1.png";
import estudioImg4 from "../../assets/images/about-2.png";
import ContactBtn from '../ContactBtn/ContactBtn';
import { ReactComponent as Logo } from "../../assets/images/logo-gray.svg";

function Estudio({inView}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <section className={`estudio section ${window.innerWidth >= 760 ? (!inView ? "theme--default" : "theme--dark") : "theme--dark"}`} id="estudio">
      <div className='estudio-container'>
        <div className='estudio-content'>
          <Logo className='estudio-logo' />

          <Fade>
            <h2 className='estudio-title title'>{t("estudio.title")}</h2>
          </Fade>
          <Fade delay={150}>
            <div className='estudio-location title'>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1.625C10.6305 1.6278 8.35883 2.57032 6.68333 4.24582C5.00783 5.92132 4.0653 8.19299 4.06251 10.5625C4.05967 12.4989 4.69218 14.3827 5.86301 15.925C5.86301 15.925 6.10676 16.2459 6.14657 16.2922L13 24.375L19.8567 16.2882C19.8924 16.2451 20.137 15.925 20.137 15.925L20.1378 15.9226C21.3081 14.3809 21.9403 12.498 21.9375 10.5625C21.9347 8.19299 20.9922 5.92132 19.3167 4.24582C17.6412 2.57032 15.3695 1.6278 13 1.625ZM13 13.8125C12.3572 13.8125 11.7289 13.6219 11.1944 13.2648C10.6599 12.9077 10.2434 12.4001 9.9974 11.8062C9.75142 11.2124 9.68706 10.5589 9.81246 9.92846C9.93786 9.29802 10.2474 8.71892 10.7019 8.2644C11.1564 7.80988 11.7355 7.50035 12.366 7.37495C12.9964 7.24955 13.6499 7.31391 14.2437 7.55989C14.8376 7.80588 15.3452 8.22244 15.7023 8.7569C16.0594 9.29136 16.25 9.91971 16.25 10.5625C16.2489 11.4241 15.9062 12.2501 15.2969 12.8594C14.6877 13.4687 13.8616 13.8114 13 13.8125Z" fill="#858585"/>
            </svg>
              <h3 className='estudio-location--text'>{t("estudio.location")}</h3>
            </div>
          </Fade>
          <Fade delay={200}>
            <p className='estudio-text'>{t("estudio.text-1")}</p>
          </Fade>
          <Fade delay={250}>
            <p className='estudio-text'>{t("estudio.text-2")}</p>
          </Fade>
          <Fade delay={300}>
            <p className='estudio-text'>{t("estudio.text-3")}</p>
          </Fade>
          <Fade delay={350}>
            <p className='estudio-text'>{t("estudio.text-4")}</p>
          </Fade>
          <Fade delay={400}>
            <p className='estudio-text'>{t("estudio.text-5")}</p>
          </Fade>
          <ContactBtn/>
        </div>
        <Gallery
          galleryID="estudio-gallery"
          images={[
            {
              name: estudioImg1,
              width: 1875,
              height: 2500,
              tag: 'img1',
            },
            {
              name: estudioImg2,
              width: 1669,
              height: 2500,
              tag: 'img2',
            },
            {
              name: estudioImg3,
              width: 2500,
              height: 1666,
              tag: 'img3',
            },
            {
              name: estudioImg4,
              width: 2500,
              height: 1666,
              tag: 'img4',
            },
          ]}
        />      
      </div>
      
    </section>
  );
}

export default Estudio;