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

//Base de datos con JSON
const productosElectronicos = [
    {id: 1, img: "./imagenes/cell.png", tipo: "Celular", marca: "Motorola", precio: 1500, color: "Azul marino", disponible: 1},
    {id: 2, img: "./imagenes/len.png", tipo: "Laptop", marca: "Lenovo", precio: 2500, color: "Plata", disponible: 1},
    {id: 3, img: "./imagenes/audi.png", tipo: "Audifonos", marca: "Steren", precio: 350, color: "Rojos rgb", disponible: 1},
    {id: 4, img: "./imagenes/usb.png", tipo: "Usb", marca: "Kingston", precio: 140, color: "Negro", disponible: 1},
    {id: 5, img: "./imagenes/mouse.png", tipo: "Mouse", marca: "Gamer", precio: 120, color: "Multicolor", disponible: 1},
    {id: 6, img: "./imagenes/moni.png", tipo: "Monitor", marca: "HP", precio: 2000, color: "Negro", disponible: 1},
    {id: 7, img: "./imagenes/led.png", tipo: "Teclado leds", marca: "Microsoft", precio: 2700, color: "Blanco", disponible: 1},
    {id: 8, img: "./imagenes/cpu.png", tipo: "Cpu", marca: "Thinkcentre", precio: 3700, color: "Rojo-negro", disponible: 1},
];


// Mostrar los productos almacenados en la base de datos

const productosSector = document.getElementById("productosSector");
const pruebaNav = document.getElementById("pruebaNav")

productosElectronicos.forEach (producto => {
    productosSector.innerHTML += 
    `
    <div class="card cardCodigo m-0">
        <img src="${producto.img}" class="card-img-top imagenesProducto" alt="${producto.tipo}">
        <div class="card-body cuerpoCard m-0">
        <h2 class="card-title">${producto.tipo}</h2>
        <h2 class="card-title">${producto.marca}</h2>
        <h2 class="card-title">${producto.color}</h2>
        <p class="card-title">Precio: $ ${producto.precio}</p>
        <p class="card-title">Disponible: ${producto.disponible}
        <div class ="contenedorCarritoBoton">
            <button class="btn btn-success" id="productos${producto.id}"> Agregar Al Carrito </button>
            </div>
        </div>
    </div>
    `
    const botonagregarCarrito = document.getElementById (`pruebaNav${producto.id}`)
    botonagregarCarrito.addEventListener("click", ()=> {
        agregarAlCarrito(producto.id, carritoCompras);
    } )
})

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