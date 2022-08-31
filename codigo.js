const formularioUi = document.getElementById("formulario")

const datosUsuarios = [];

const usuarios = (nombre, email, password, nombrePersonal, apellido) => {
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

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let apellido = document.getElementById("apellido").value;
    let nombrePersonal = document.getElementById("nombrePersonal").value;

    usuarios(nombre, email, password, apellido, nombrePersonal)
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

    if (emailRegistro.match(pattern))
    {
    formularioRegistro.classList.add("valid");
    formularioRegistro.classList.remove("invalid");
    textoValid.innerHTML = "Tu Cuenta de correo es Valida";
    textoValid.style.color = "#09BC8A"
    }
    else
    {
    formularioRegistro.classList.remove("valid");
    formularioRegistro.classList.add("invalid");
    textoValid.innerHTML= "Por favor ingrese una cuenta de correo Valida";
    textoValid.style.color = "#ff0000"
    }
    
}