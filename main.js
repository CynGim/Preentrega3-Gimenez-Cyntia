//Referencia de elementos del form mediante Dom
const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const telefono = document.querySelector("#telefono")
const direccion = document.querySelector("#direccion")
const ciudad = document.querySelector("#ciudad")
const estado = document.querySelector("#estado")
const zip = document.querySelector("#zip")
//funcion storage y Json creo evento con objeto de 6 atributos
document.querySelector("#guardar").addEventListener('click', () =>{const contacto = {
    email: email.value,
    telefono: telefono.value,
    direccion: direccion.value,
    ciudad: ciudad.value,
    estado: estado.value,
    zip: zip.value,
}
localStorage.setItem(nombre.value, JSON.stringify(contacto))
nombre.value = ""
email.value = ""
telefono.value = ""
direccion.value = ""
ciudad.value = ""
estado.value = ""
zip.value = ""
})
//Recupero datos del evento con funcion Json, creando objeto con 6 atributos

document.querySelector("#recuperar").addEventListener('click', () => {
    const contenido = localStorage.getItem(nombre.value)
    if (contenido != null) {
        const contacto = JSON.parse(contenido)
        email.value = contacto.email
        telefono.value = contacto.telefono
        direccion.value = contacto.direccion
        ciudad.value = contacto.ciudad
        estado.value = contacto.estado
        zip.value = contacto.zip
    } 
})
