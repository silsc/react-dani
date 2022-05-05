import React, { Component }  from 'react';
import './navbar.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { HashLink } from 'react-router-hash-link';

import { ReactComponent as Hamburger }  from '../../assets/icons/hamburger.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Insta } from '../../assets/icons/insta.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';


export default function Navbar({inView}) {
  const [ showNavbar, setshowNavbar ] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  const openModal = () => {
    setshowNavbar(true);
  }

  const closeModal = () => {
    setshowNavbar(false);
  }

  return (
    <div className={`${ !inView ? "theme--default" : "theme--dark"}`}>
      <nav className={`navbar ${!showNavbar ? "" : "hidden"}`}>
        <Hamburger className='navbar-open-btn' onClick={() => openModal()}/>
        <div className='navbar-bottom'>
          <svg width="0" height="0">
            <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
              <stop stopColor="#fdf497" offset="0" />
              <stop stopColor="#fdf497" offset="0.05" />
              <stop stopColor="#fd5949" offset="0.45" />
              <stop stopColor="#d6249f" offset="0.6" />
              <stop stopColor="#285AEB" offset="0.9" />
            </radialGradient>
          </svg>
          <a className="navbar-bottom-insta" target="_blank" href="https://www.instagram.com/danisalat/">
            <Insta/>
          </a>
          <a className="navbar-bottom-youtube" target="_blank" href="https://www.youtube.com/channel/UCS13MmmbbiE4PmsZVURWVrQ">
            <Youtube/>
          </a>
          <div className='navbar-bottom-lang'>
            <button className={`lang-btn ${!showNavbar ? "" : "hidden"}`}  onClick={() => changeLanguage("en")}>EN</button>
            <button className='lang-btn' onClick={() => changeLanguage("es")}>ES</button>
          </div>
        </div>
      </nav>
      <nav className={`navbar-open ${showNavbar ? "" : "hidden"}`}>
        <Close className='navbar-close-btn' onClick={() => closeModal()}/>
        <div className='navbar-links'>
          <HashLink className='navbar-link' smooth to="/#home">
            {t("navbar.home")}
          </HashLink>
          <HashLink className='navbar-link' smooth to="/#services">
            {t("navbar.services")}
          </HashLink>
          <HashLink className='navbar-link' smooth to="/#about">
            {t("navbar.about")}
          </HashLink>
          <HashLink className='navbar-link' smooth to="/#work">
            {t("navbar.work")}
          </HashLink>
          <HashLink className='navbar-link' smooth to="/#reviews">
            {t("navbar.reviews")}
          </HashLink>
          <HashLink className='navbar-link' smooth to="/#contact">
            {t("navbar.contact")}
          </HashLink>
        </div>
      </nav>
    </div>
  );
}