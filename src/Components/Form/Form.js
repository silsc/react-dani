import { ValidationError, useForm } from '@formspree/react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './form.scss';

function Form() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  const [state, handleSubmit] = useForm("xeqvlzvp");
  if (state.succeeded) {
    return <div>{t("contact.form.succes-msg")}</div>;
  }
  return (
      <form className="form" onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder={t("contact.form.email")}
        required
      />
      <ValidationError 
        prefix="email" 
        field="email"
        errors={state.errors}
      />
      <input
        id="name"
        type="text" 
        name="name"
        placeholder={t("contact.form.name")}
        required
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder={t("contact.form.message")}
        requireds
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='policy-btn'>
        <input type="checkbox" id="topping" name="topping" required />{t("contact.form.privacy-1")} 
      <Link to="policy" className='link'>  {t("contact.form.privacy-2")}</Link>
      </div>
    

      <button type="submit" disabled={state.submitting} className="submit-btn">
        {t("contact.form.submit-btn")}
      </button>
      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
    </form>
  );
}

export default Form;