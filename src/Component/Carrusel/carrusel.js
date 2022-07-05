import React from "react";
import Slider from "infinite-react-carousel";

import "./carrusel.css";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const Carrusel = () => {
  const images = [
    { id: "1", image: img1 },
    { id: "2", image: img2 },
    { id: "3", image: img3 },
    { id: "4", image: img4 },
  ];

  return (
    <section className="slider">
      <Slider
        autoplay
        arrows={false}
        autoPlayScroll={1}
        autoPlaySpeed={4000}
        duration={400}
        className="slider__content"
      >
        {images.map((image) => (
          <div key={image.id} className="slider__content--item">
            <img src={image.image} alt="Imagen de referencia"></img>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carrusel;
