/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cesta from "./cesta";


// Desplegable titulo

function Nav1(compras) {
  const [desplegable, setDesplegable] = useState(false);
  const [mostrarCesta, setMostrarCesta] = useState(false);
  

  const mostrarOcultarCesta = () => {
    setMostrarCesta(!mostrarCesta);
  };

  // Deesplegable
  function mostrarDesplegable() {
    setDesplegable(!desplegable);
  }

  // Scroll cambia de color

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Aqui utilizo otra forma de aplicar estilos en React 
  // En ewte caso le doy estilo al desplegable del boton tienda
  const navbarStyle = {
    width: "100%",
    backgroundColor: scrolled ? "white" : "#FACE0B",
    transition: "background-color 0.3s ease",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
  };
  // Estilko de letras(presentación)
  const estiloLetras = {
    fontSize: "3.8rem",
    // Otros estilos que desees aplicar a las letras
  };

  return (
    <>
    <div className="navbarsub" style={navbarStyle}>
      <div className="navleft">
        <div
        // Cuando el mouse entra en el div "navleft", activa el menu desplegable
          className={`dropdown ${desplegable ? "active" : ""}`}
          onMouseEnter={mostrarDesplegable}
          onMouseLeave={mostrarDesplegable}
        >
          <a className="dropbtn" href="#">
            Tienda
          </a>
          {desplegable && ( //si veradero
            <div className="dropdown-content">
              {/* Aplico el estilo a las letras en linea */}
              <Link to="/catalogo" style={{ fontSize: "1.8rem" }}>
                Catalogo de viajes
              </Link>
              <Link to="/" style={{ fontSize: "1.8rem" }}>
                Página inicial
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="navcenter">
        <Link to="/" className="tu-clase-de-estilo">
          <h1 style={estiloLetras}>TimeWarp Tours</h1>
        </Link>
      </div>
      <div className="navright">
        <a>
          {" "}
          {/* sesión o registrarse */}
          <FontAwesomeIcon icon={faUser} size="2x" />
        </a>
        <a onClick={mostrarOcultarCesta}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </a>
        <div className="contador">
          
        </div>
        
      </div>
      
    </div>
    {mostrarCesta && (
        <div className="carrito">
          <Cesta compras={compras}/>

        </div>
      )}
    </>
  );
}

export default Nav1;
