/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// Este complemento cards sirve para renderizar 
// cada uno de los objetos del ".map de catalogo" por separado 
// y que cada uno tenga sue stado independiente 
// Eso es importante para que cuando hagamos clic en el boton de comprar,por ejemplo
// solo compremos el articulo que hacemos click y no todos los articulso desplegados
// Es hijo de el componente "catalogo" del que recibe a tyraves de props la funcion agregarALaCesta

// manejar la lógica de añadir un viaje a la cesta cuando el usuario hace 
// clic en el botón "Añadir a la cesta"

const Card = (props)  => {
  const { viaje, agregarALaCesta } = props;
  // se inicializa como false usando el hook useState. Este estado se utiliza
  //  para determinar si se debe mostrar o no la sinopsis del viaje cuando el usuario
  //  pasa el ratón sobre la tarjeta del viaje., ahora mismo, la variable  sinopsis= false
  const [mostrarSinopsis, setMostrarSinopsis] = useState(false);
  // Estado para texto de alerta comprado en tarjeta de articulo al hacer click
  const [comprado, setComprado] = useState(false);

    

// Funciones para el evento  "hover" logico de mostrar y ocultar sinopsis 
  const mostrarSinopsisHandler = () => {
    setMostrarSinopsis(true);
  };

  const ocultarSinopsisHandler = () => {
    setMostrarSinopsis(false);
  };

  
//  Funcion onClick boton de compra
  const handleCompraClick = () => {
    // La funcion "agregarALaCesta" y su parámetro "viaje" se reciben como props
    // En la funcion Card dede el componente padre catalogo
    agregarALaCesta(viaje);
    // Ademas de ejecutar "agregarALaCesta", al hacer click cambiamos el estado de la
    // variable "comprado" de "false " a "true" activando el div "comprado", 
    // esto sucede al hacer click al boton
    setComprado(true);
  };

  // Funcion para sumar al carrito
  const [contador, setContador] = useState(0);
  function sumarContador() {
    setContador(contador + 1);
  }

  return (
    <div
      className="card"
      // Utilizo la imagen del servidor u objeto de fondo de la card
      style={{ backgroundImage: `url(${viaje.cartel})` }}
      // Esta línea asigna la función "mostrarSinopsisHandler" al evento onMouseEnter,
      // lo que significa que cuando el ratón entra en la tarjeta, 
      // se activa "mostrarSinopsisHandler" y se establece mostrarSinopsis en true.
      onMouseEnter={mostrarSinopsisHandler}
      onMouseLeave={ocultarSinopsisHandler}
    >
      {/*este condicional ternario, la clase mostrar-sinopsis se aplica a card-intern cuando mostrarSinopsis es true */}
      <div className={`card-intern ${mostrarSinopsis ? 'mostrar-sinopsis' : ''}`}>
        <div className="card-datos">
          <div className="card-titulo">
            <h2>{viaje.titulo}</h2>
          </div>
          {mostrarSinopsis && (
            <div className="sinopsis-cartel">
              <p>{viaje.sinopsis}</p>
            </div>
          )}
         <button onClick={() => { handleCompraClick(); sumarContador(); }}>Añadir a la cesta</button>
          {/* asegura que el componente <div className="sinopsis-cartel"> solo se 
          renderice cuando mostrarSinopsis es true, mostrando así la sinopsis solo
           cuando el ratón está sobre la tarjeta del viaje */}
          {comprado && 
          <div className="comprado">
          <p>Comprado</p>
          </div>
          }
        </div>
      </div>
    </div>
    
  );
};

export default Card;
