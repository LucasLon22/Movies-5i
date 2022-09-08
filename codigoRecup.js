//formulario para recupero de contraseña
//codigo para el recupero de contraseña


const nuevaContrasenia = document.getElementById("formularioRecup");
const nuevosDatos = [];

const datosNC = (newfirstpassword, newpassword) => {
    const datosNuevos = {
        newfirstpassword: newfirstpassword,
        newpassword: newpassword
    }
    nuevosDatos.push(datosNuevos)
    console.log(nuevosDatos)
}

const guardarND = () => {
    localStorage.setItem("datosNC", JSON.stringify(nuevosDatos))
}


nuevaContrasenia.addEventListener("submit", (e) => {
    e.preventDefault()

    let newfirstpassword = document.getElementById("newfirstpassword").value;
    let newpassword = document.getElementById("newpassword").value;

    datosNC(newfirstpassword, newpassword);
    guardarND()

    nuevaContrasenia.reset();
})

const loginrecup = () => {
    let userRecup = JSON.parse(localStorage.getItem("datosNC"));
    console.log(userRecup.nuevaContrasenia);

    let nuevaContrasenia = document.getElementById("newfirstpassword").value;
    let nuevacontra = document.getElementById("newpassword").value;

    let index = userRecup.findIndex((element) => element.newfirstpassword === nuevaContrasenia && element.newpassword === nuevacontra)
    if (index != -1) {
        window.location.assign("./admin.html")
    } else {
        alert("Las contraseñas no coinciden")
    }
}
