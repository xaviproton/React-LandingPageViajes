/* eslint-disable no-unused-vars */



//(CRUD) CREATE
//       READ 
//       UPDATE 
//       DELETE 

//Funcion de GET  mostrar PErsonajes pagina estatica  R ead

function mostrarPersonaje() {
  fetch("personajes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function mostrarRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function mostrarDatos(datos) {
      let mostrarInfo = "";
      for (let i = 0; i < datos.length; i++) {
        mostrarInfo += `
              <br>
              <br>
              <div class="card">
              <div class="card-image">
              <img src="${datos[i].imagen}" width="400px" height="250px">
              </div>
              <div class="card-title">
              <h2>${datos[i].nombre}</h2>
              </div>
              <div class="card-content">
              <div class="card-datos">
              <p>Edad: ${datos[i].edad}</p>
              <p>Especie: ${datos[i].especie}</p>
              <p>Procedencia: ${datos[i].procedencia}</p>
              <p>Profesión: ${datos[i].profesion}</p>
              </div>
              </div>
              </div>
              `;
      }
      document.getElementById("fry").innerHTML = mostrarInfo;
    });
} //Fin de funcion

//Fundion de POST ingresar personaje
let mostrarError = false;
let mensajeError = "";

function mostrarMensajeError() {
  if (mostrarError) {
    const errorDiv = document.getElementById("myError");
    errorDiv.innerHTML = `
      <div>
        <h3 id="mymensajeError">${mensajeError}</h3>
      </div>
    `;
  } else {
    document.getElementById("myError").innerHTML = "";
  }
}

function mostarMEnsajeCorrecto(){
 
    const errorDiv = document.getElementById("myError");
    errorDiv.innerHTML = `
      <div>
        <h3 id="mensajeCorrecto">Se ha ingresado correctamente</h3>
      </div>
    `;
  } 


function ingresarPersonaje() {
  event.preventDefault();
  let nuevoPersonaje = {
    nombre: document.getElementById("name").value,
    genero: document.getElementById("genero").value,
    edad: document.getElementById("edad").value,
    especie: document.getElementById("especie").value,
    procedencia: document.getElementById("procedencia").value,
    profesion: document.getElementById("profesion").value,
    imagen: document.getElementById("imagen").value,
  };
  mostarMEnsajeCorrecto()
  fetch("/personajes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoPersonaje),
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json().then((data) => {
          mostrarError = true;
          mensajeError = data.error;
          mostrarMensajeError();
        });
      }else{
        mostarMEnsajeCorrecto()
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      if (mostrarError) {
        console.log('Se encontró un error, no se evita el comportamiento predeterminado del formulario.');
        event.preventDefault(); // Previene el comportamiento predeterminado solo si hay un error
      }
    });  
} //Fin de funcion

//Funcion PUT para modificar datos de personaje

function modificarPersonaje() {
  let nuevo = {
    nombre: document.getElementById("a-name").value,
    edad: document.getElementById("a-edad").value,
    profesion: document.getElementById("a-profesion").value,
    imagen: document.getElementById("a-image").value,
  };
  fetch("/personajes", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo),
  });
  location.reload();
} //Fin de funcion

// Funcion DELETE apra elminar personajes
function eliminarPersonaje() {
  event.preventDefault();
  let mostrar = document.getElementById("mensaje-error"); 
  mostrar.innerHTML = ""; 

  let nombre = document.getElementById("b-name").value;
  if (nombre === "") {
    mostrar.innerHTML = `
      <div class="aciertoGeneral">
        <div class="imagensinerror">
          <img src="./fry.png"></img>
        </div>
        <div class="hasintroducido">
          <h1>Debes ingresar el nombre del personaje</h1>
        </div>
      </div>
    `;
    return; // Detener la ejecución si la caja de búsqueda está vacía
  }

  let futurama = {
    nombre: nombre,
  };

  fetch("/personajes", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(futurama),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        mostrar.innerHTML = `
          <div class="aciertoGeneral">
            <div class="imagensinerror">
              <img src="./fry.png"></img>
            </div>
            <div class="hasintroducido">
              <h1>No se encontró al personaje</h1>
            </div>
          </div>
        `;
      } else {
        mostrar.innerHTML = `
          <div class="aciertoGeneral">
            <div class="imagensinerror">
              <img src="./bender.png"></img>
            </div>
            <div class="hasintroducido">
              <h1>Se ha eliminado al personaje exitosamente</h1>
            </div>
          </div>
        `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}







