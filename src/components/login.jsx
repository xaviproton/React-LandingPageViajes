/* eslint-disable no-unused-vars */
import React, { useState } from 'react';


const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    genero: '',
    edad: '',
    especie: '',
    procedencia: '',
    profesion: '',
    imagen: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  // falta logia del servidor
    console.log('Datos del formulario:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="base">
      <div className="my-formulario">
        <h3>Añadir Personaje</h3>
        <div id="myError"></div>
        <form className="first-row" onSubmit={handleSubmit}>
          <div className="my-formularioBox">
            <div className="interBox1">
              <label>Nombre:</label>
              <input type="text" id="name" className="myinput" placeholder="Nombre" onChange={handleInputChange} required />

              <label>Genero:</label>
              <input type="text" id="genero" className="myinput" placeholder="Genero" onChange={handleInputChange} />

              <label>Edad:</label>
              <input type="number" id="edad" className="myinput" placeholder="Edad" onChange={handleInputChange} />

              <label>Especie:</label>
              <input type="text" id="especie" className="myinput" placeholder="Especie" onChange={handleInputChange} />
            </div>

            <div className="interBox2">
              <label>Procedencia:</label>
              <input type="text" id="procedencia" className="myinput" placeholder="Procedencia" onChange={handleInputChange} />

              <label>Profesión:</label>
              <input type="text" id="profesion" className="myinput" placeholder="Profesión" onChange={handleInputChange} />

              <label>Imagen:</label>
              <input type="text" id="imagen" className="myinput" placeholder="Imagen" onChange={handleInputChange} />
            </div>
          </div>

          <div className="my-formularioButton">
            <button type="submit">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
