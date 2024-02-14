/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";


function PageUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) { //100 son el numero de px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scrolly"> {/* Asegúrate de tener tu contenedor definido con altura */}
      {/* Contenido de tu página */}
      {showButton && (
        <button className="boton-subir" onClick={scrollToTop}>
            <div className="up">
        <h1>^</h1>
        <h2>^</h2>
        </div>
        </button>
      )}
    </div>
  );
}

export default PageUp;
