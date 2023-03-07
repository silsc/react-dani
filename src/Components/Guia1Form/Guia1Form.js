import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Guia1Form = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    }
    const [email, setEmail] = useState('');

    const validateInput = values => {

        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
      }

    const [displayForm, setDisplayForm] = useState(true);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    useEffect(() => {
        const f = () => {
            setDisplaySuccess(true);
            setDisplayForm(false);
        };

        // register it on the window object
        window['ml_webform_success_3781852'] = f;

        const script = document.createElement('script');
      
        script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v300817f630ad0e957914d0b28a2b6d78";
        script.async = true;
      
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);

        }
      }, []);

    return (
        <>
            <div id="mlb2-3781852" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3781852">
                <div>
                    <div className="ml-form-embedWrapper embedForm">
                        
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form" style={displayForm ? {display: "block"} : {display: "none"}}>

                        <div className="ml-form-embedContent" >
                        
                            <p>{t("campaign1.text")}</p>
                        
                        </div>

                        <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/347959/forms/81468075935794560/subscribe" data-code="" method="post" target="_blank">
                            <div className="ml-form-formContent">
    
                                <div className="ml-form-fieldRow ml-last-item">
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">


                                    <input onChange={(e) => setEmail(e.target.value)} aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" />


                                    </div>
                                </div>

                                <div className='checkbox'>
                                    <input type="checkbox" id="privacy" className='' name="privacy" value="accept" required />
                                    <label for="privacy">{t("campaign1.privacy")}</label>
                                </div>


                                
                            </div>


                            
                            <input type="hidden" name="ml-submit" value="1" />

                            <div className="ml-form-embedSubmit">
                                
                                <button type="submit" className="primary" disabled={validateInput([email])} > {t("campaign1.send")}</button>
                                
                                <button disabled="disabled" style={{display: "none"}} type="button" className="loading">
                                <div className="ml-form-embedSubmitLoad"></div>
                                <span className="sr-only">{t("campaign1.sending")}</span>
                                </button>
                            </div>

                            
                            <input type="hidden" name="anticsrf" value="true" />
                        </form>
                    </div>

                    <div className="ml-form-successBody row-success" style={ displaySuccess ? {display: "block"} : {display: "none"}}>

                        <div className="ml-form-successContent">
                        
                            <h4>{t("campaign1.sent-1")}</h4>
                            
                            <p>{t("campaign1.sent-2")}</p>

                            <Link to="/" className='link-web'>{t("campaign1.goback")}</Link>
                             
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Guia1Form;
