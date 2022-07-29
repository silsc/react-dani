import './work.scss';
import React,{ useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';
import Player from '../Player/Player';
import { ReactComponent as Spotify } from '../../assets/icons/spotify.svg';



const Work = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
    <section ref={ref} className={`work section ${ props.inView ? "theme--dark" : "theme--default"}`} id="work">
      <Header/>
      <div className='work-content'>
        <Fade delay={200}>
          <Player/>
        </Fade>
        <div className='work-info'>
          <Fade cascade triggerOnce delay={200}>
            <h2 className='work-title'>{t("work.title")}</h2>
            <p>{t("work.text-1")}</p>
            <p>{t("work.text-2")}</p>

            <div className='work-spotify'>
              <p>
              <HashLink className='bold link' smooth to="/#contact">
              {t("work.cta-1")}
              </HashLink>
              {t("work.text-3")} <span className='cursor spotify-green bold' onClick={() => window.location = 'https://open.spotify.com/playlist/2nwVcowWfYhXXqkmVgGVNK?si=586a412f544a44e7&nd=1, "_blank"'}>{t("work.cta-2")} </span></p>
              <Spotify onClick={() => window.location = 'https://open.spotify.com/playlist/2nwVcowWfYhXXqkmVgGVNK?si=586a412f544a44e7&nd=1', "_blank"}></Spotify>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
})

export default Work;