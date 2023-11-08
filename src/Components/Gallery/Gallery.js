import React, { Component, useEffect }  from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

function Gallery({inView, images, galleryID, tag}) {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
    <div className="estudio-imgs pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <Fade delay={200 + (index*100)} className={'estudio-' + image.tag} >
        <a
          href={image.name}
          data-pswp-width={image.heigh}
          data-pswp-height={image.width}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          className={'estudio-' + image.tag}
        >
          <img src={image.name} alt="" className={'estudio-' + image.tag} style={{ cursor: "pointer" }} />
        </a>
        </Fade>
      ))}
      
    </div> 
    </>   
  );
}

export default Gallery;