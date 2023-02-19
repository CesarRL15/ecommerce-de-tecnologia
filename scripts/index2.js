//Base de datos con JSON
const productosSector = document.getElementById("productosSector");

const productosElectronicos = [
    {id: 1, img: "./imagenes/cell.png", tipo: "Celular", marca: "Motorola", precio: 1500, color: "Azul marino", disponible: 1},
    {id: 2, img: "./imagenes/iphone.png", tipo: "Celular", marca: "Iphone", precio: 30000, color: "Negro", disponible: 1},
    {id: 3, img: "./imagenes/audi.png", tipo: "Audifonos", marca: "Steren", precio: 350, color: "Rojos rgb", disponible: 1},
    {id: 4, img: "./imagenes/audi2.png", tipo: "Audifonos", marca: "Steren", precio: 500, color: "Negro", disponible: 1},
    {id: 5, img: "./imagenes/mouse.png", tipo: "Mouse", marca: "Gamer", precio: 120, color: "Multicolor", disponible: 1},
    {id: 6, img: "./imagenes/moni.png", tipo: "Monitor", marca: "HP", precio: 2000, color: "Negro", disponible: 1},
    {id: 7, img: "./imagenes/led.png", tipo: "Teclado leds", marca: "Microsoft", precio: 2700, color: "Blanco", disponible: 1},
    {id: 8, img: "./imagenes/cpu.png", tipo: "Cpu", marca: "Thinkcentre", precio: 3700, color: "Rojo-negro", disponible: 1},
    {id: 9, img: "./imagenes/usb.png", tipo: "USB", marca: "Kingston", precio: 180, color: "Negro", disponible: 1},
    {id: 10, img: "./imagenes/alexa.png", tipo: "Bocina Inteligente", marca: "Alexa", precio: 4000, color: "Blanco", disponible: 1},
    {id: 11, img: "./imagenes/discosolido.png", tipo: "Disco ES", marca: "Kingston", precio: 2600, color: "Gris", disponible: 1},
    {id: 12, img: "./imagenes/pointwifi.png", tipo: "Wifi Point", marca: "China Router", precio: 3600, color: "Negro", disponible: 1},
];  


// Mostrar los productos almacenados de la base de datos en la pagina 

productosElectronicos.forEach (producto => {
    productosSector.innerHTML += 
    `
    <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="${producto.tipo}">
        <div class="card-body">
        <h3 class="card-title">${producto.tipo}</h3>
        <h3 class="card-title">${producto.marca}</h3>
        <h3 class="card-title">${producto.color}</h3>
        <p class="card-text">Precio: $ ${producto.precio}</p>
        <p class="card-text">Disponible: ${producto.disponible}
        <div>
            <button class="btn btn-success" id="producto${producto.id}"> Agregar Al Carrito </button>
            </div>
        </div>
    </div>
    `
})



