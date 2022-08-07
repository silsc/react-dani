import "./campaign.scss";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { InView } from "react-intersection-observer";

import Header from "../Header/Header";
import MailchimpFormContainer from "../MailchimpFormContainer/MailchimpFormContainer";
import Navbar from "../Navbar/Navbar";

function Campaign() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [inView, setInView] = useState();

  useEffect(() => {
    document.documentElement.classList.add(
      `${
        window.innerWidth >= 760
          ? !inView
            ? "theme--default"
            : "theme--dark"
          : "theme--dark"
      }`
    );
    return () => {
      document.documentElement.classList.remove(
        `${
          window.innerWidth >= 760
            ? !inView
              ? "theme--default"
              : "theme--dark"
            : "theme--dark"
        }`
      );
    };
  });

  return (
    <>
      <Navbar inView={inView} />

      <section className={`campaign section`}>
        <Header />
        <h2 className="title">{t("campaign.header")}</h2>
        <MailchimpFormContainer />
      </section>
    </>
  );
}

export default Campaign;
