//variable de cada tipo numerica y boleana
//let numero = 10;
//let animeDragonball = true;

//operacion numerica
//const edadUsuario = prompt("Cuantos años tienes?")
//const edadUsuario2 = prompt("Cuantos años tiene el usuario 2");
//console.log("edad" + edadUsuario + edadUsuario2);

//const operacion = 20;
//const resultado1 = 30; 
//const resultado = operacion + resultado1; 
//alert ("cuenta de para el usuario" + resultado)  

//CONCATENACION
//const saludo = alert("Hola " + nombreProducto + ", Tienes" + tipoProducto + " " + "Estas nuevas novedades.");

//INTERPOLACION O TRANSPOLACIÓN
//const saludoTranspolacio = alert (`Hola ${nombreProducto}, tienes ${tipoProducto} estos nuevos productos!`)

// comparacion y asignacion
//let comparacion = 9 < 10;
//console.log("Es menor", 9, "que", 10, "? La respuesta es:", comparacion)

//Query Selector
//document.querySelector("h1").textContent = "Soy el numero uno"
////
//console.log(document.querySelector("a"))// Trae el primer elemento que cumpla con esa seleccion
//console.log(document.querySelector(".logo"))//Trae el primer elemento que sea de tipo clase
//console.log(document.querySelector("#productosSector"))//Trae el primer elemento que sea de tipo ID

//Query Selector All
//console.log(document.querySelectorAll("li"))// Trae el primer elemento que cumpla con esa seleccion

//Elementos por ID GET ELEMENT
//console.log(document.getElementById ("productosSector"))//Trae Elementos Por Id

//Como Modificar Nodo Con DOM
//const h1 = document.querySelector("h1");

//h1.textContent = "Productos Mas Buscados";

//const productosSector = document.getElementById("productosSector");

//productosSector.innerHTML = "Productos En Oferta";

//Como agregar estilos sin INNER HTML

//productosSector.classList.add ("indexH1");

//Como Agregar Etiquetas sin inner HTML
//const h5 = document.createElement ("h3");
//h5.textContent = "Contenido";
//productosSector.appendChild (h5)

//Agregar Productos Al Carrito
const carritoCompras = [];

const agregarAlCarrito = (productoSeleccionado,carrito) => {
    const productoElegido = productosElectronicos.find (item => item.id === productoSeleccionado)
    carrito.push(productoElegido);
    console.log("Producto agregado con exito" , carritoCompras);
}


const contenidoCarrito = document.createElement ("p");
contenidoCarrito.textContent = carritoCompras.length;
contenidoCarrito.classList.add("pruebaNav")
//pruebaNav.appendChild(contenidoCarrito);

//Comprobar el contenido del carrito
if (carritoCompras.length !==0){
    pruebaNav.appendChild(contenidoCarrito);
}