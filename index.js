const url="https://jsonplaceholder.typicode.com/users";
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fecha = document.getElementById("fecha");
const boton = document.getElementById("boton");
boton.addEventListener("click", function(e){
    e.preventDefault;
    const datos = {
    "Nombre": nombre.value,
    "Apellido": apellido.value,
    "Fecha": fecha.value
    }
    const options = {
    method: 'POST', 
    headers: {
    'Content-type': 'application/json',
    },
    body: JSON.stringify(datos),
};
fetch(url, options)
.then(response => {
    if (!response.ok){
        throw new Error("Error de solicitud")
    }
    return response.json();
})
.then(data =>{
    console.log("a", data);
})
.catch(error => {
    console.error("ERROR", error);
});
})

