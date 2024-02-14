/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Carousel from "./carrousel";
import { Link } from "react-router-dom";
import PageUp from "./pageUp";
function Main2() {

  // Funcion letras que suben main2

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
        if (window.scrollY > 0) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        }

    window.addEventListener("scroll", handleScroll);
    return () => {
        // Limpieza, para que cuando no se use el componente 
        // no funcione o se actualice
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

// Array Imagnes carousel

const images = [
  "https://www.ngenespanol.com/wp-content/uploads/2023/07/que-le-pasa-al-cuerpo-humano-en-el-espacio-exterior-sucede-1024x573.jpg",
  "https://www.oasysparquetematico.com/wp-content/uploads/2018/02/detacada.jpg",
  "https://okdiario.com/img/2021/12/10/-como-seran-las-ciudades-europeas-del-futuro_.jpg",
  "https://sfo2.digitaloceanspaces.com/elpaiscr/2019/05/Nave-espacial-se-acerca-a-un-planeta.-Ilustraci%25C3%25B3n-PIXABAY.jpg",
  "https://okdiario.com/img/2019/10/25/prehistoria-655x368.jpeg",
  "https://media.traveler.es/photos/62dadb4a97500f54d427e298/16:9/w_2560%2Cc_limit/02%2520Lourinha%252006_Torvosaurus_Supersaurus.JPG"

];
// Array texto lateral de imagen 

const texts = [
  "Imagina un viaje más allá de las estrellas, donde los límites de la gravedad se desvanecen y los confines del universo son tu nuevo horizonte. En nuestra aventura virtual en el espacio, te ofrecemos la oportunidad única de explorar los misterios del cosmos desde la comodidad de tu hogar.",
  "Embárcate en un viaje en el tiempo hacia una era de vaqueros, salones polvorientos y vastas llanuras sin fin. Nuestra aventura virtual en el Viejo Oeste te transportará a una época de valientes forajidos y leales pistoleros, donde la leyenda se entrelaza con la realidad en cada rincón polvoriento de los pueblos fronterizos.",
  "¿Te atreves a mirar hacia adelante, hacia un mundo de innovación sin límites y descubrimientos que desafían la imaginación? Nuestra aventura virtual al futuro te invita a un viaje extraordinario, donde las tecnologías avanzadas, las ciudades flotantes y los paisajes futuristas se combinan para ofrecerte una experiencia como ninguna otra.",
  "Prepárate para una odisea que te llevará más allá de las estrellas, hacia un mundo alienígena de maravillas inexploradas y paisajes surrealistas. Nuestra aventura virtual te transportará a un planeta distante, donde la bioluminiscencia ilumina la noche y los cielos están dominados por constelaciones completamente diferentes a las que conocemos.",
  "Prepárate para un emocionante viaje en el tiempo, millones de años atrás, cuando la Tierra estaba poblada por criaturas colosales y aterradoras: ¡los dinosaurios! Nuestra aventura virtual te llevará a la era de los dinosaurios, un mundo donde estas majestuosas bestias vagaban por vastas llanuras y exuberantes selvas, creando un paisaje que solo habíamos imaginado en nuestros sueños.",
  "Imagina retroceder en el tiempo, mucho antes de las civilizaciones, cuando la Tierra estaba dominada por dinosaurios, bosques inexplorados y criaturas que desafían la imaginación. Nuestra aventura virtual te llevará a la prehistoria, a un mundo primitivo donde la vida es una lucha constante por la supervivencia y los misterios de la Tierra antigua aguardan para ser descubiertos."
];

// Array texto de imagen 

const texts2=[
  "Explora el espacio",
  "El viejo Oeste",
  "Visita el Futuro",
  "Viaja por planetas extraños",
  "Vuelve a los Origenes",
  "¿Te gustan los Dinosaurios?"

]

// ______________________________________________________________________________

  return (
    <>
      <div className="mainb">
        <div className={`text-carrousel ${isActive ? "active" : ""}`}>
          <h1 className="scroll-up-text">Virtual Tours</h1>
        </div>
        <div className="texto-carou0">
        <div className="texto-carou">
        <h2>Viaja sin límites de tiempo ni espacio.</h2>
        </div>
        <div className="texto-carou2">
        <h2>Tu próxima gran aventura está a solo un clic de distancia</h2>
        </div>
        </div>
        <div className="my-carrousel">
        <Link to="/catalogo">
        <Carousel images={images} texts={texts} texts2={texts2} />
      </Link>

        </div>
      </div>

      <PageUp/>
    </>
  );
}

export default Main2;
