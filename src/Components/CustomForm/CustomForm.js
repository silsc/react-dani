import React, {useEffect, useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "react-router-dom";


const CustomForm = ({ status, message, onValidated }) => {

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
      console.log(values);

      if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
        console.log("hello");
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
        <h3 className="mc__title">
          {status === "success" ? "Enviado!" : "Dime adónde quieres que te mande la guía!"}
        </h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">enviando...</div>
        )}
        {status === "error" && (
          <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }} />
        )}
        {status === "success" && (
          <div className="mc__alert mc__alert--success" angerouslySetInnerHTML={{ __html: message }} />
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

        { status === 'success' ? <Link to="policy" className='link'>Go to website</Link>  : 
        <input type='submit' defaultValue="subscribe" disabled={validateInput([email])}
        />
        }

      </form>
    );
};

export default CustomForm;
