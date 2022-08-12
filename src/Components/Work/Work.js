import './work.scss';

import React, {useEffect, useState} from 'react';
import {Fade} from "react-awesome-reveal";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {HashLink} from 'react-router-hash-link';

import {ReactComponent as Spotify} from '../../assets/icons/spotify.svg';
import Header from '../Header/Header';
import Player from '../Player/Player';

const Work = React.forwardRef((props, ref) => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => { i18n.changeLanguage(language); }

  const openInNewTab =
      url => { window.open(url, '_blank', 'noopener,noreferrer'); };

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
              {t("work.text-3")} <span className='cursor spotify-green bold' onClick={() => openInNewTab('https://open.spotify.com/playlist/2nwVcowWfYhXXqkmVgGVNK?si=586a412f544a44e7&nd=1')}>{t("work.cta-2")} </span></p>
              <Spotify onClick={() => openInNewTab('https://open.spotify.com/playlist/2nwVcowWfYhXXqkmVgGVNK?si=586a412f544a44e7&nd=1')}></Spotify>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
})

export default Work;