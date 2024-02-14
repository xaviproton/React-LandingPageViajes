/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ images, texts, texts2 }) => {

  // En esta funcion usamos los esatdos de react para crear un componente carroussel
  // que exportaremos en el componente que necesitemos
  const [currentImage, setCurrentImage] = useState(0);

  // Estas funciones las usamos para pasar de imagen cada vezx que haga click usando un evento
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Movimiento de imagen en carrousel

  return (

    // Cuando el boton hace clik, se activa el evento que le indicamos, en este caso "prevImage"
    <div className="my-carrousel-in">
      <button onClick={prevImage} className="nav-button">
       
      </button>
      <div className="imagen-carou">
        <img
          className="carousel-image"
          src={images[currentImage]}
          alt={`imagen ${currentImage}`} //xavi, recuerda que sin ` no renderiza
        />
        <div className="letters-carou">{texts2[currentImage]}</div>
      </div>
      <div className="image-text">{texts[currentImage]}</div>

      <button onClick={nextImage} className="nav-button1">
       
      </button>
    </div>
  );
};

export default Carousel;
