/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

// Recibe el objeto compras como prop
const Cesta = ({ compras }) => {
  // Verificar si el objeto está vacío
  if (Object.keys(compras).length === 0) {  5
    return (
      <div className="cesta">
        <h2>Tu Cesta de Compras</h2>
        <p>No hay productos en tu cesta.</p>
      </div>
    );
  } else {
    return (
      // Si hay productos en la cesta (el objeto no está vacío), 
      // muestra el contenido de la cesta. Itera a través de las claves
      //  del objeto compras y muestra cada producto
      <div className="cesta">
        <div className="titulo-Cesty">
          <h2>Tu Cesta de Compras</h2>
        </div>
        <div className="contenido-Cesty">
          {Object.keys(compras).map((key, index) => (
            <div className="inCesta" key={index}>
              {Object.entries(compras[key]).map(
                ([propiedad, valor], subIndex) => (
                  <div key={propiedad}>
                    {subIndex + 1}-{valor}
                    {/* subindex lo uso para que los numeros en el carro no empeicen desde 0 */}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Cesta;
