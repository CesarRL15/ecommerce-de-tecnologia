//Array
/*const productosElectronicos = [
    {id: 1, img: "./imagenes/img.png", tipo: "Celular", marca: "motorola", precio: 1500, color: "azul marino"},
    {id: 2, img: "./imagenes/img.png", tipo: "Laptop", marca: "lenovo", precio: 2500, color: "plata"},
    {id: 3, img: "./imagenes/img.png", tipo: "Audifonos", marca: "steren", precio: 350, color: "rojos rgb"},
    {id: 4, img: "./imagenes/img.png", tipo: "Usb", marca: "kingston", precio: 140, color: "negro"},
    {id: 5, img: "./imagenes/img.png", tipo: "Mouse", marca: "genius", precio: 120, color: "negro"},
    {id: 6, img: "./imagenes/img.png", tipo: "Monitor", marca: "hp", precio: 2000, color: "negro"},
    {id: 7, img: "./imagenes/img.png", tipo: "Teclado leds", marca: "microsoft", precio: 2700, color: "blanco"},
    {id: 8, img: "./imagenes/img.png", tipo: "Cpu", marca: "thinkcentre", precio: 3700, color: "rojo y negro"},
];*/

//promedio de los productos
/*const ejercicioTres = productosElectronicos.map (item => item.precio);
const ejerciReduce = ejercicioTres.reduce((total, precio)=> total+ precio );
console. log ("total", ejerciReduce);

const promedio = ejerciReduce / productosElectronicos.length;

console.log(promedio)

console.log("Array Original", productosElectronicos);*/

//FOR EACH 

/*productosElectronicos.forEach(producto => {
    console.log("La lista de producto contiene estas marcas:", producto.marca)
})*/

//FILTER-PreciosBajos

//const superOfertas = productosElectronicos.filter(elemento => elemento.precio < 200)
//console.log("Las super ofertas que le ofrece TecSite son:" , superOfertas)
//FILTER-Robo de la tienda
//const roboTienda = productosElectronicos.filter (elemento => elemento.precio > 200)
//console.log("Los productos mas cotizados de TecSite son:" , roboTienda)
//Filter-Buscador
//const marcaProducto = productosElectronicos.filter(item => item.marca.includes("m"))
//console.log(marcaProducto, "INCLUYE?")

//FIND

//const productoSeleccionado = productosElectronicos.find(producto => producto.id === 5);
//console.log("El producto seleccionado por el usuario es: ", productoSeleccionado);

//const productoSeleccionado = productosElectronicos.find(producto => producto.id === 5);

//console.log("El producto seleccionado por el usuario es: ", productoSeleccionado);

//console.log("El carrito guardo estos productos: " ,carritoCompras)

//agregarCarrito(productoSeleccionado, carritoCompras)

//console.log("Productos agregados por ti: " ,carritoCompras)

//SOME
//const marcaProducto = productosElectronicos.some (item => item.marca === "microsoft")
//console.log("Esta marca esta registrada en la lista? ", marcaProducto)

//MAP
//console.log("Precios Nomarles: ", productosElectronicos);

//const mitadPrecio = productosElectronicos.map (item => item.precio / 2)

//console.log("Gran rebaja de fin de mes", mitadPrecio)

//REDUCE
//Reduce(Acumulador, Valores Actuales //// Opcional:Valor Incial)
//Mezcla de reduce y map A
//const arrayPrecio = carritoCompras.map (item => item.precio);

//console.log("Total a pagar", arrayPrecio);

//const totalPagar = arrayPrecio.reduce ((total,precio)=>total + precio);

//console.log("Tu cuenta es de: " + totalPagar);

//Opcion B Solo Reduce 
//const totalPagarB = carritoCompras.reduce((totalPagarB, item)=> totalPagarB + item.precio, 500);
//console.log("Tu cuenta es de:", totalPagarB);

/*if (totalPagar >= 500){
    console.log("Tu envio es gratis por hacer consumo de mas de 100 pesos: ", totalPagar);
} else {
    console.log("Tu cuenta + tu envio es de: ", totalPagarB);
}*/

//SORT
/*const baratoCaro = productosElectronicos.sort ((producto1, producto2) => producto1.precio - producto2.precio);

console.log ("Productos ordenados por precio baratos", baratoCaro);

const caroBarato = productosElectronicos.sort ((producto1, producto2) => producto2.precio - producto1.precio);

console.log ("Productos ordenados por precio caros", caroBarato);

const ordenProductos = productosElectronicos.sort ((item1, item2) => {
    if (item1.tipo == item2.tipo){
        return 0
    }else if (item1.tipo < item2.tipo){
        return -1
    }else{
        return 1
    }
})

console.log("Productos Ordenados Alfabeticamente", ordenProductos)*/