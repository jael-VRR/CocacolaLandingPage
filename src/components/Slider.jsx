import React from "react";
import Swiper from "react-id-swiper";
import "../styles/Slider.css";
import cocacola1 from "../images/cocacola1.png";
import cocacola2 from "../images/cocacola2.png";
import cocacola3 from "../images/cocacola3.png";
import cocacola4 from "../images/cocacola4.png";
import cocacola5 from "../images/cocacola5.png";
import cocacola6 from "../images/cocacola6.png";

function Slider() {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  };
  return (
    <div className="imgBox">
      <div className="swipper-container">
        <Swiper {...params}>
          <div>
            <img className="swiper-slide" src={cocacola1} alt="cocacola1" />
          </div>
          <div>
            <img className="swiper-slide" src={cocacola2} alt="cocacola2" />
          </div>
          <div>
            <img className="swiper-slide" src={cocacola3} alt="cocacola3" />
          </div>
          <div>
            <img className="swiper-slide" src={cocacola4} alt="cocacola4" />
          </div>
          <div>
            <img className="swiper-slide" src={cocacola5} alt="cocacola5" />
          </div>
          <div>
            <img className="swiper-slide" src={cocacola6} alt="cocacola6" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
