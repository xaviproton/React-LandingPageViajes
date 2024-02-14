/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Importación de imagenes
import Rexy from "../imagenes/rexy.png";
import Pyramid from "../imagenes/pyramid.png";
import Gillo from "../imagenes/guillo.png";
import Future from "../imagenes/future.png";
import Palmera from "../imagenes/palmera.png";
import Robot2 from "../imagenes/robot2.png";
import gafas from "../imagenes/gafasVR.png";
import Main2 from "./main2";

// Aquí utilizo el hook "useState" para crear dos estados:
//  isVisible y actualizarColor. 
// isVisible se utiliza para alternar la visibilidad de las letras 
// y actualizarColor se utiliza para almacenar el color que se aplicará al texto.

function Main1() {
  const [isVisible, setIsVisible] = useState(true);
  const [actualizarColor, setActualizarColor] = useState("white");
// Creo el array de colores para las letras
  const colors = ["black", "red", "blue", "green", "grey"];

// El hook useEffect se utiliza para realizar efectos secundarios
//  en componentes funcionales. Crea un intervalo que
//  se ejecuta cada 500 milisegundos.

  useEffect(() => {
    const intervalId = setInterval(() => {
      // si isVisible es true, se convierte en false; y si isVisible es false, se convierte en true
      setIsVisible((prevVisible) => !prevVisible);
      //para cambiar el color de las letras
      const randomIndex = Math.floor(Math.random() * colors.length);
      setActualizarColor(colors[randomIndex]);
    }, 500); // 
//  limpiar el intervalo cuando el componente se desmonta. 
    return () => clearInterval(intervalId);
  }, []);

  //   Para aplicar el estilo a las letras magicaS
  const textStyle = {
    color: actualizarColor,
  };

  return (
    <main>
      <div className="main1">
        <div className="mainleft">
          <div className="mainlefttext">
            <h2>Vive una</h2>
            <h1>Experíencia</h1>
            <div className="magic">
              {isVisible && (
                <div className="super-text">
                  {/* Aplicamos el estilo de las letras */}
                  <h4 style={textStyle}>VIRTUAL!</h4>
                </div>
              )}
            </div>

            <div className="mini-text">
              <h4>Vive la Aventura que TU QUIERAS como TU QUIERAS</h4>
            </div>
          </div>
          <div className="mainleft-redirect">
            {/* Boton_____________________________________________________________________________________________ */}
            <Link to="/catalogo">
              <button className="main-btn"> Tu WarpAventura</button>
            </Link>
          </div>
        </div>
        <div className="mainright">
          <div className="mainimagen1">
            <img src={Rexy} alt="Viajes Holografico-TRex" />
          </div>
          <div className="mainimagen2">
            <img src={Pyramid} alt="Viajes Holografico" />
          </div>
          <div className="mainimagen3">
            <img src={Gillo} alt="Viajes Holografico" />
          </div>
          <div className="mainimagen4">
            <img src={Future} alt="Viajes Holografico" />
          </div>
          <div className="mainimagen5">
            <img src={Palmera} alt="Viajes Holografico" />
          </div>
          <div className="mainimagen6">
            <img src={Robot2} alt="Viajes Holografico" />
          </div>
        </div>
      </div>
      <div className="animacionCentral">
        <div className="animacion">
          <img src={gafas} alt="gafas" />
        </div>
        <div className="line"></div>
      </div>
      <div className="main2">
        <Main2 />
      </div>
    </main>
  ); //Fin return
} //Fin function

export default Main1;
