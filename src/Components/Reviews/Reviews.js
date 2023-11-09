import './reviews.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Header from '../Header/Header';
import chanderImg from "../../assets/images/chander.jpeg";
import dezImg from "../../assets/images/dez.jpeg";
import marcImg from "../../assets/images/marc.png";
import kirianImg from "../../assets/images/kirian.png";
import perarniImg from "../../assets/images/perarni.jpeg";


function Reviews() {
  const { t, i18n } = useTranslation();

  const [ darkTheme, setDarkTheme ] = useState(false)

  const testimonials = [
    {
      name: t("reviews.card-1.name"),
      text: t("reviews.card-1.review"),
      band: t("reviews.card-1.band"),
      image: dezImg
    },
    {
      name: t("reviews.card-2.name"),
      text: t("reviews.card-2.review"),
      band: t("reviews.card-2.band"),
      image: kirianImg
    },
    {
      name: t("reviews.card-3.name"),
      text: t("reviews.card-3.review"),
      band: t("reviews.card-3.band"),
      image: chanderImg
    },
    {
      name: t("reviews.card-4.name"),
      text: t("reviews.card-4.review"),
      band: t("reviews.card-4.band"),
      image: perarniImg
    },
    {
      name: t("reviews.card-5.name"),
      text: t("reviews.card-5.review"),
      band: t("reviews.card-5.band"),
      image: marcImg
    }
  ];

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [check, setCheck] = useState(false)

  function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(index) {
      if (touchStart - touchEnd > 0) {
        const nextEl =  document.getElementById(`t-${index + 2}`);
        setCheck(true)
        nextEl.checked = setCheck;
        ;
      }

      if (touchStart - touchEnd < -1) {
        const prevEl = document.getElementById(`t-${index}`);
        setCheck(true)
        prevEl.checked = setCheck;
      }
  }

  return (
    <section className={`reviews section ${!darkTheme ? "theme--default" : "theme--dark"}`} id="reviews">
      <Fade>
        <h2 className='reviews-title title'>{t("reviews.title")}</h2>
      </Fade>
      <Fade delay={300} >
        <div className="slider">
          <input type="radio" name="testimonial" id="t-1" />
          <input type="radio" name="testimonial" id="t-2" defaultChecked/>
          <input type="radio" name="testimonial" id="t-3" />
          <input type="radio" name="testimonial" id="t-4" />
          <input type="radio" name="testimonial" id="t-5" />  
            <div className="testimonials">
              {testimonials.map((testimonial, index) => {
                return (
                  <label 
                    className="testimonial" 
                    htmlFor={"t-"+(index + 1)} 
                    id={"testimonial-"+(index + 1)}
                    onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                    onTouchMove={touchMoveEvent =>handleTouchMove(touchMoveEvent)}
                    onTouchEnd={() => handleTouchEnd(index)}>
                    <img src={testimonial.image} className='testimonial-img'/>
                    <Fade >
                    <div className="testimonial-container">
                      <p className="testimonial-text">{testimonial.text}</p>
                      <h1 className="testimonial-name">{testimonial.name}</h1>
                      <h3 className="testimonial-band">{testimonial.band}</h3>
                    </div>
                    </Fade>
                  </label>
                );
              })}
            </div>
        </div>
      </Fade>
    </section>
  );
}

export default Reviews;