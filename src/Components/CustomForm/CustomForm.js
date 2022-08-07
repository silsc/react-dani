import React, {useEffect, useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './customform.scss';

const CustomForm = ({ status, message, onValidated }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    }
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      email &&
      email.indexOf("@") > -1 &&
      onValidated({
          EMAIL: email,
      });
    }

    const validateInput = values => {

      if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
          return true
      } else {
          return false
      }
    }

    useEffect(() => {
      if(status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setEmail('');
    }

    return (
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        
        {status === "success" ? <h3 className="text sent">Enviado! </h3> : <h3 className="text">Dime adónde quieres que te mande la guía!</h3> 
        }
        
        {status === "sending" && (
          <div className="alert mc__alert--sending">enviando...</div>
        )}

        {status === "error" && (
          <div className="alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }} />
        )}

        {status !== "success" ? (
          <div className="mc__field-container">

            <input
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              placeholder="your@email.com"
              defaultValue={email}
              required
            />

          </div>
          ) : null
        }
        <Link to="policy" className='policy-btn'> {t("contact.form.privacy-2")}</Link> 
        { status === 'success' ? <Link to="/" className='link-web'>Ir a la web</Link>  : 
        <input className="submit-btn" type='submit' defaultValue="subscribe" disabled={validateInput([email])}
        />
        }

      </form>
    );
};

export default CustomForm;
