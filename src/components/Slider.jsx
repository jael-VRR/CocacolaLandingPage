import React from 'react';
import Swiper from "react-id-swiper";
import '../styles/Slider.css';
import cocacola1 from "../images/cocacola1.png";
import cocacola2 from "../images/cocacola2.png";
import cocacola3 from "../images/cocacola3.png";
import cocacola4 from "../images/cocacola4.png";
import cocacola5 from "../images/cocacola5.png";
import cocacola6 from "../images/cocacola6.png";

function Slider() {
  const params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content-slide">
      <Swiper {...params}>
        <div>
          <img className="item" src={cocacola1} alt="cocacola1" />
        </div>
        <div>
          <img className="item" src={cocacola2} alt="cocacola2" />
        </div>
        <div>
          <img className="item" src={cocacola3} alt="cocacola3" />
        </div>
        <div>
          <img className="item" src={cocacola4} alt="cocacola4" />
        </div>
        <div>
          <img className="item" src={cocacola5} alt="cocacola5" />
        </div>
        <div>
          <img className="item" src={cocacola6} alt="cocacola6" />
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
