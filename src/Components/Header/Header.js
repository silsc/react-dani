import React, { Component }  from 'react';
import './header.scss'
// import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../assets/images/logo-gray.svg";

function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className='header'>
      <p className='header-title' >{t("header.title")}</p>
      <Logo className='header-logo' />
    </div>
  );
}

export default Header;