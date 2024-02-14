import "./App.css";
import "@animxyz/core"; //Libreria 
import { BrowserRouter, Route, Routes } from "react-router-dom"; //Necesitamos instalarlo
import Home from "./components/home"; //Componente hijo directo de App.jsx
import Viajes from "./components/viajes";//Componente hijo directo de App.jsx

// Esta es la aplicacion padre de todos, el código dentro de la función "App()" 
// devuelve un contenedor "<div>" que envuelve las rutas. 
// Este contenedor proporciona una estructura básica para la aplicación 
// y asegura que todo esté organizado de manera ordenada en el "DOM"

// Establezco las rutas que nos redirigen a los difrerentes componentes de la aplicacion

// Las rutas son como direcciones web específicas dentro de tu aplicación
// Los componentes son como bloques de construcción para la interfaz de usuario.

// Cuando el usuario visita una ruta específica en mi aplicación (por ejemplo, "/catalogo"),
//  el enrutador de React se encarga de mostrar el componente correspondiente ("Viajes" en este caso)
//  en el área de la página web donde se encuentra el contenedor "<div className="container">."

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Viajes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
