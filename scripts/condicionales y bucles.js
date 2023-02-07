//Operador Ternario

//let edad = 14;

//edad ? (console.log("Tu edad es valida!")) : (console.log("Aun eres un pequeñin no valido!"));

/*f (edad) {
    console.log ("Tu edad es valida!");
} else {
    console.log ("Aun eres un pequeñin no valido!");
}*/


// Array con los productos de mi Ecommerce

/*const productosElectronicos = [
    {id: 1, img: "./imagenes/img.png", tipo: "Celular", marca: "motorola", precio: 1500},
    {id: 2, img: "./imagenes/img.png", tipo: "Laptop", marca: "lenovo", precio: 2500},
    {id: 3, img: "./imagenes/img.png", tipo: "Audifonos", marca: "steren", precio: 350},
    {id: 4, img: "./imagenes/img.png", tipo: "Usb", marca: "kingston", precio: 140},
    {id: 5, img: "./imagenes/img.png", tipo: "Mouse", marca: "genius", precio: 120},
];*/

/*for (let i = 0; i < productosElectronicos.length; i++){
    console.log ("Detalles de los productos seleccionados son: ", productosElectronicos[i]);
}*/

//console.log (productosElectronicos);

//Carrito seleccionador
//const carritoCompras = [];

//console.log ("El carrito contiene lo siguiente : ", carrito);

//carrito.push (productosElectronicos[4]);

//console.log("El carrito guardo estos productos : " , carrito);


//Funcion de agregar productos al carrito
/*console.log("Gran Shopping: ", carritoCompras)

const agregarCarrito = (producto, carrito)=> {
    carrito.push (producto);
    console.log (`El producto se agrego con exito!`);
}

agregarCarrito (productosElectronicos[4], carritoCompras);
agregarCarrito (productosElectronicos[2], carritoCompras);
agregarCarrito (productosElectronicos[3], carritoCompras);*/

//FIND

//const productoSeleccionado = productosElectronicos.find(producto => producto.id === 5);

//console.log("El producto seleccionado por el usuario es: ", productoSeleccionado);

//console.log("El carrito guardo estos productos: " ,carritoCompras)

//agregarCarrito(productoSeleccionado, carritoCompras)

//console.log("Productos agregados por ti: " ,carritoCompras)

//agregarCarrito (productosElectronicos[3], carritoCompras);
//agregarCarrito (productosElectronicos[4], carritoCompras);

//console.log("Has agregado estos productos al carrito: ", carritoCompras);

//Precio total del carrito de compras
/*for (let i = 0; i < carritoCompras.length; i++){
    console.log ("Detalles de los productos seleccionados son: ", productosElectronicos[i]);
}*/

//Total a pagar de los productos

//let totalPagar = 0;

/*for (let i = 0; i < carritoCompras.length; i++){

    console.log ("Tu cuenta es de: ", totalPagar += carritoCompras[i].precio);
}*/

//Bucle SWITCH
/*let edad = '30';

switch (edad){
    case '18':
        console.log('En la compra de un boleto te regalamos unas palomitas');
        break;
    case '25':
        console.log('Tienes descuento en la compra de combos');
        break;
    case '30':
        console.log('En la compra de dos entradas se le regalara unos lentes 3D');
        break;
    default:
        console.log('Aun eres un pequeñin para solicitar una promocion')
        break;
    }*/

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

