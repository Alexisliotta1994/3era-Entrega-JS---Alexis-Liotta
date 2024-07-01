/*
Tercera entrega js - Alexis Liotta
*/

    profile_data = localStorage.getItem("profile_data")
    let fotoInicial = document.getElementById("fotoInicial")
    let nombreinicial = document.getElementById("nombreInicial")
    let apellidoInicial = document.getElementById("apellidoInicial")
    let emailInicial = document.getElementById("emailInicial")    
    let form = document.getElementById('formulario');
    let divInicial = document.getElementById('divPersonalizar');
    let divModificar = document.getElementById('divmodificar');
    let botonModificar = document.getElementById('botonAbrir');

if(!profile_data){
    fotoInicial.srcset = "https://img.freepik.com/vector-gratis/cute-dibujos-animados-perro-salchicha_138676-2313.jpg"
    nombreinicial.innerText = ("Usuario8172")
    apellidoInicial.innerText = ("o39dfhg")
    emailInicial.innerText = ("noemail@noemail.com")
    
} else{
    const aJson = JSON.parse(profile_data); 
    fotoInicial.srcset = (aJson.foto)
    nombreinicial.innerText = (aJson.nombre)
    apellidoInicial.innerText = (aJson.apellido)
    emailInicial.innerText = (aJson.email)
    
}
function cambiarClases(e) {
        divModificar.className = "divCardModificar"
        divInicial.className = "ocultar"
}
    botonModificar.addEventListener("click", cambiarClases)

function formfuntion(e) {
    e.preventDefault(e);
    let fotoperfil = document.getElementById("fotoinput")
    let nombreinput = document.getElementById("nombreinput")
    let apellidoinput = document.getElementById("apellidoinput")
    let emailinput = document.getElementById("emailinput")
    let formularioCompleto = {
        foto: fotoperfil.value,
        nombre: nombreinput.value,
        apellido: apellidoinput.value,
        email: emailinput.value,
    }
    
        
    let convertidoJson = JSON.stringify(formularioCompleto); 
    localStorage.setItem("profile_data" ,convertidoJson);
    fotoInicial.srcset = formularioCompleto.foto
    nombreinicial.innerText = formularioCompleto.nombre
    apellidoInicial.innerText = formularioCompleto.apellido
    emailInicial.innerText = formularioCompleto.email
    divModificar.className = "ocultar"
    divInicial.className = "divCard"
    console.log(formularioCompleto)
  }
  
form.addEventListener("submit", formfuntion);