//CODIGO PARA EL FORMULARIO DE REGISTRO Y LOGIN, ESTE CODIGO PERMITE OBTENER DATOS DEL FORMULARIO DE REGISTRO Y GUARDARLOS EN EL LOCALSTORAGE PARA POSTERIORMENTE ESTOS MISMOS DATOS COMPARARLOS CON LOS DATOS QUE SE INGRESE EN EL LOGIN Y A PARTIR DE AHI INGRESAR A LA PAGINA DE ADMINISTRACIÓN.

const formularioUi = document.getElementById("formulario")
const formularioRecuperacion = document.getElementById("formulario-recup");
const formularioBuscar = document.getElementById("formularioBuscar");
const botonBuscar = document.querySelector('#botonBuscar');
const resultadoBuscar = document.getElementById("resultadobuscar");
const tituloResultadoBuscar = document.getElementById("tituloResultadoBuscar");
const resultadosBusqueda = document.getElementById("resultadosBusqueda");


const datosUsuarios = [];

const usuarios = (nombrePersonal, apellido, nombre, email, password) => {
    const datos = {
        nombrePersonal: nombrePersonal,
        apellido: apellido,
        nombre: nombre,
        email: email,
        password: password
    }

    datosUsuarios.push(datos)
    return datosUsuarios
}





const guardarDB = () => {
    localStorage.setItem("usuarios", JSON.stringify(datosUsuarios))
}


formularioUi.addEventListener("submit", (e) => {
    e.preventDefault()

    let nombrePersonal = document.getElementById("nombrePersonal").value;
    let apellido = document.getElementById("apellido").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    usuarios(nombrePersonal, apellido, nombre, email, password)
    guardarDB()

    formularioUi.reset();

})


const login = () => {


    let users = JSON.parse(localStorage.getItem("usuarios"))
    console.log(users.nombre)

    let username = document.getElementById("username").value;
    let contrasenia = document.getElementById("contrasenia").value;


    let index = users.findIndex(element => element.nombre === username && element.password === contrasenia)
    if (index != -1) {
        window.location.assign("./admin.html")
    } else {
        swal("Oops", "No existe una cuenta con ese correo", "error");
    }
}


function validation() {
    let formularioRegistro = document.getElementById("formulario");
    let emailRegistro = document.getElementById("email").value;
    let textoValid = document.getElementById("textoValid");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailRegistro.match(pattern)) {
        formularioRegistro.classList.add("valid");
        formularioRegistro.classList.remove("invalid");
        textoValid.innerHTML = "Tu Cuenta de correo es Valida";
        textoValid.style.color = "#09BC8A"
    }
    else {
        formularioRegistro.classList.remove("valid");
        formularioRegistro.classList.add("invalid");
        textoValid.innerHTML = "Por favor ingrese una cuenta de correo Valida";
        textoValid.style.color = "#ff0000"
    }

}
//AQUI TERMINA CODIGO PARA LOS FORMULARIOS DE REGISTRO Y LOGIN Y SU COMPARACIÓN.


//COMIENZA EL CODIGO PARA ENVÍO DE DATOS DEL REGISTRO Y LOGIN




//TERMINA EL CODIGO PARA EL REGISTRO Y LOGIN.


//AQUI COMIENZA EL CODIGO PARA EL EFECTO DEL FONDO DEL NAV QUE APARECE Y DESAPARECE CUANDO EL SCROLL SE COMIENZA A MOVER.

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("abajo", window.scrollY > 0);
})


function validationRecup() {
    let formularioRecupero = document.getElementById("formulario-recup");
    let emailRecupero = document.getElementById("emailRecupero").value;
    let textoValidacion = document.getElementById("textoValidacion");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailRecupero.match(pattern)) {
        formularioRecupero.classList.add("valid");
        formularioRecupero.classList.remove("invalid");
        textoValidacion.innerHTML = "Tu Cuenta de correo es Valida";
        textoValidacion.style.color = "#09BC8A"
    }
    else {
        formularioRecupero.classList.remove("valid");
        formularioRecupero.classList.add("invalid");
        textoValidacion.innerHTML = "Por favor ingrese una cuenta de correo Valida";
        textoValidacion.style.color = "#ff0000"
    }

}


// Aqui comienza el código para el boton buscar

peliculasMovie = [
    {
        titulo: "Sonic The Hedgehog",
        Anio: "(2021)",
        duracion: "Calidad | Duración: 2:31:23",
        imagen: "./imagenes/srcBody/movie-1.png"
    },
    {
        titulo: "Morbius",
        Anio: "(2007)",
        duracion: "Calidad | Duración: 1:45:23",
        imagen: "./imagenes/srcBody/movie-2.png"
    },
    {
        titulo: "The Adam Project",
        Anio: "(2011)",
        duracion: "Calidad | Duración: 1:50:23",
        imagen: "./imagenes/srcBody/movie-3.png"
    },
    {
        titulo: "Free Guy",
        Anio: "(2006)",
        duracion: "Calidad | Duración: 1:30:23",
        imagen: "./imagenes/srcBody/movie-4.png"
    },
    {
        titulo: "Batman",
        Anio: "(1999)",
        duracion: "Calidad | Duración: 2:37:23",
        imagen: "./imagenes/srcBody/movie-5.png"
    },
    {
        titulo: "Uncharted",
        Anio: "(2004)",
        duracion: "Calidad | Duración: 1:45:23",
        imagen: "./imagenes/srcBody/movie-6.png"
    },
    {
        titulo: "Death on the Nile",
        AAnioño: "(2008)",
        duracion: "Calidad | Duración: 1:50:23",
        imagen: "./imagenes/srcBody/movie-7.png"
    },
    {
        titulo: "The King's Man",
        Anio: "(2001)",
        duracion: "Calidad | Duración: 1:30:23",
        imagen: "./imagenes/srcBody/movie-8.png"
    },
    {
        titulo: "Moon Knight",
        Anio: "(1997)",
        duracion: "Calidad | Duración: 2:317:23",
        imagen: "./imagenes/srcBody/series-1.png"
    },
    {
        titulo: "Halo",
        Anio: "(1977)",
        duracion: "Calidad | Duración: 1:45:23",
        imagen: "./imagenes/srcBody/series-2.png"
    },
    {
        titulo: "Vikings Valhalla",
        Anio: "(2007)",
        duracion: "Calidad | Duración: 1:50:23",
        imagen: "./imagenes/srcBody/series-3.png"
    },
    {
        titulo: "Money Heist",
        Anio: "(2005)",
        duracion: "Calidad | Duración: 1:30:23",
        imagen: "./imagenes/srcBody/series-4.png"
    },
    {
        titulo: "The Northman",
        Anio: "(2021)",
        duracion: "Calidad | Duración: 2:37:23",
        imagen: "./imagenes/srcBody/upcoming-1.png"
    },
    {
        titulo: "Doctor Strange",
        Anio: "(1987)",
        duracion: "Calidad | Duración: 1:45:23",
        imagen: "./imagenes/srcBody/upcoming-2.png"
    },
    {
        titulo: "Memory",
        Anio: "(1985)",
        duracion: "Calidad | Duración: 1:50:23",
        imagen: "./imagenes/srcBody/upcoming-3.png"

    },
    {
        titulo: "Massive Talent",
        Anio: "(1996)",
        duracion: "Calidad | Duración: 1:30:23",
        imagen: "./imagenes/srcBody/upcoming-4.png"
    },

]



botonBuscar.addEventListener('click', filtrar = () => {

    tituloResultadoBuscar.innerHTML = "";

    const textoBuscar = formularioBuscar.value.toLowerCase();
    if (textoBuscar === '') {
        resultadoBuscar.innerHTML = '';

    } else {
        tituloResultadoBuscar.innerHTML += `Resultados de la búsqueda`;
        resultadoBuscar.innerHTML = '';

        for (let pelicula of peliculasMovie) {

            let nombrePelicula = pelicula.titulo.toLowerCase();

            if (nombrePelicula.indexOf(textoBuscar) !== -1) {
                tituloResultadoBuscar.innerHTML += '';
                resultadoBuscar.innerHTML += `
            
            <div class="col">
            <div class="card">
            <img src="${pelicula.imagen}" class="card-img-top img-fluid" alt="Estrenos1">
            <div class="card-body">
              <h5 class="card-title">${pelicula.titulo}</h5>
              
              <p class="card-text ">${pelicula.Anio}</p>
            </div>
            <hr>
    
            <div class="container">
              <div class="caracteristicas row align-items-start"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-badge-4k-fill mx-3 mb-4 col color-icono" viewBox="0 0 16 16">
                <path d="M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 0 0-1.766 3.001z" />
                <path
                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2.372 3.715.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-watch mx-3 mb-4 col color-icono" viewBox="0 0 16 16">
                <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                <path
                  d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
              </svg>
              <p class="mx-2 col texto-descripcion ">${pelicula.duracion}</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        
            `

            }




        }
        if (resultadoBuscar.innerHTML === '') {
            resultadoBuscar.innerHTML += `
        <div class="text-light">Pelicula no Encontrada</div>`
        }

    }

    // botonBuscar.reset()

})







//    Aqui termina el codigo para el boton buscar