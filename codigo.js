//CODIGO PARA EL FORMULARIO DE REGISTRO Y LOGIN, ESTE CODIGO PERMITE OBTENER DATOS DEL FORMULARIO DE REGISTRO Y GUARDARLOS EN EL LOCALSTORAGE PARA POSTERIORMENTE ESTOS MISMOS DATOS COMPARARLOS CON LOS DATOS QUE SE INGRESE EN EL LOGIN Y A PARTIR DE AHI INGRESAR A LA PAGINA DE ADMINISTRACIÓN.

const formularioUi = document.getElementById("formulario")

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
        alert("El usuario o contraseña no es correcto")
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
