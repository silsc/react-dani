import './campaign3.scss';
import 'react-responsive-modal/styles.css';

import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Modal} from 'react-responsive-modal';
import {Link} from "react-router-dom";

import campaingtImg from '../../assets/images/campaingImg.jpeg';
import FormImg from "../../assets/images/formImg.png";
import Header from '../Header/Header';

const bgStyle = {
  backgroundImage : 'url(' + campaingtImg + ')',
  backgroundPosition : 'center',
  backgroundSize : 'cover',
};

function Campaign3() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => { i18n.changeLanguage(language); };
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState('');
  const onCloseModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);

  const validateInput =
      values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
          return true
        } else {
          return false
        }
      }

  const [showElement, setShowElement] = React.useState(true);

  const [displaySuccess, setDisplaySuccess] = useState(false);

  useEffect(() => {
    const f = () => { setDisplaySuccess(true); };

    setTimeout(function() { setShowElement(false) }, 1000);

    // register it on the window object
    window['ml_webform_success_13427889'] = f;

    const script = document.createElement('script');

    script.src =
        "https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127";
    script.async = true;

    document.body.appendChild(script);

    return () => { document.body.removeChild(script); }
  }, []);

  return (
    <>
    {showElement?<div className='campaign3--overlay'></div>:<></>}
    <div className={`campaign3--hero`} style={bgStyle}>
      <Header/>
      <div className={`campaign3--hero-container`}>
        <div className={`campaign3--hero-triangulo`}></div>
        <div className={`campaign3--hero-overlay`}></div>
        <h3 className='campaign3--hero-subtitle'>{t("campaign3.subheader")}</h3>
        <h1 className='campaign3--hero-title'>{t("campaign3.header")}</h1>
        <iframe width="560" height="315" className='campaign3--hero-video' src="https://www.youtube.com/embed/8Uue_ZijE0Q?si=3nBnbJM0M797jXGA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='campaign3--btn'>
          <div className='cta-btn--container campaign3--btn-container'>
            
            <button className='cta-btn campaign3--btn-inner' onClick={onOpenModal}> {t("campaign3.btn")}</button>

          </div>
        </div>
      </div> 
    </div>
    <div className={`campaign3--info-container`}>
        <div className={`campaign3--info`}>
            <div className={`campaign3--info-header`}>
              <h3 className='campaign3--info-header-subtitle'>{t("campaign3.info.subheader")}</h3>
              <h1 className='campaign3--info-header-title'>{t("campaign3.info.title")}</h1>
              <p className='campaign3--info-header-text'>{t("campaign3.info.text")}</p>
            </div>
            <div className={`campaign3--info-benefits`}>
              <div className={`campaign3--info-benefits-benefit`}>
                <h3 className='benefit--title'>{t("campaign3.info.benefits.title1")}</h3>
                <p className='benefit--text'>{t("campaign3.info.benefits.text1")}</p>
              </div>
              <div className={`campaign3--info-benefits-benefit`}>
                <h3 className='benefit--title'>{t("campaign3.info.benefits.title2")}</h3>
                <p className='benefit--text'>{t("campaign3.info.benefits.text2")}</p>
              </div>
              <div className={`campaign3--info-benefits-benefit`}>
                <h3 className='benefit--title'>{t("campaign3.info.benefits.title3")}</h3>
                <p className='benefit--text'>{t("campaign3.info.benefits.text3")}</p>
              </div>
              <div className={`campaign3--info-benefits-benefit`}>
                <h3 className='benefit--title'>{t("campaign3.info.benefits.title4")}</h3>
                <p className='benefit--text'>{t("campaign3.info.benefits.text4")}</p>
              </div>
            </div>
        </div>
        <div className='campaign3--btn'>
          <div className='cta-btn--container campaign3--btn-container'>
            
            <button className='cta-btn campaign3--btn-inner' onClick={onOpenModal}> {t("campaign3.btn")}</button>

          </div>
          
        </div>
    </div>
    <Modal open={open} onClose={onCloseModal} center>
        
            <div id="mlb2-13427889" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-13427889">
                <div>
                    <div className="ml-form-embedWrapper embedForm">
                        
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form" style={!displaySuccess ? {display: "block"} : {display: "none"}}>
                        
                
                        <img src={FormImg} alt="Logo" className="campaign3--form-img"/>

                        {/* <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/347959/forms/116524141542114399/subscribe" data-code="" method="post" target="_blank">
                            <div className="ml-form-formContent">
                                <h3>{t("campaign3.form.title")}</h3>
                                <div class="ml-form-fieldRow ">
                                    <div class="ml-field-group ml-field-name">
                                    <input aria-label="name" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Nombre" autocomplete="given-name" 
                                     />
                                    </div>
                                </div>

                                <div className="ml-form-fieldRow ml-last-item">
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">


                                    <input onChange={(e) => setEmail(e.target.value)} aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" />


                                    </div>
                                </div>

                                <div className='checkbox'>
                                    <input type="checkbox" id="privacy" className='' name="privacy" value="accept" required />
                                    <label for="privacy">{t("campaign3.privacy")}</label>
                                </div>


                                
                            </div>


                            
                            <input type="hidden" name="ml-submit" value="1" />

                            <div className="ml-form-embedSubmit">
                                
                                <button type="submit" className="primary" disabled={validateInput([email])} > {t("campaign3.form.submit-btn")}</button>
                                
                                <button disabled="disabled" style={{display: "none"}} type="button" className="loading">
                                    <div className="ml-form-embedSubmitLoad"></div>
                                    <span className="sr-only">{t("campaign3.sending")}</span>
                                </button>
                            </div>

                            
                            <input type="hidden" name="anticsrf" value="true" />
                        </form> */}
                        <h3>Esta descarga no esta disponible en estos momentos.</h3>
                        <h3>Si te interesa ponte en contacto conmigo.</h3>
                        <a className='cta-btn link'  href="https://www.instagram.com/danisalat" target="_blank">
                                {t("home.contact-btn")}
                        </a>
                    </div>

                    <div className="ml-form-successBody row-success" style={ displaySuccess ? {display: "block"} : {display: "none"}}>

                        <div className="ml-form-successContent">
                        
                            <h4>{t("campaign3.sent-1")}</h4>
                            
                            <p>{t("campaign3.sent-2")}</p>

                            <Link to="/" className='link-web'>{t("campaign3.goback")}</Link>
                             
                        </div>

                    </div>
                    </div>
                </div>
            </div>
    </Modal>
    
    <div className='campaign3--footer'>
      <p> © Dani Salat</p>
    </div>
    
  </>

  );
}

export default Campaign3;