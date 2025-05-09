const productos = [
    {descripcion: "Auriculares", precio: 49000.00}, 
    {descripcion: "Teclado", precio: 30000.00},
    {descripcion: "Mouse", precio: 20000.00},
    {descripcion: "Monitor", precio: 100000.00},
    {descripcion: "Parlante", precio: 15000.00},
]

//Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter
const productosFiltrados = productos.filter(producto => producto.precio >20000);

productosFiltrados.forEach (producto=>{
    console.log (`Producto: ${producto.descripcion} Precio: ${producto.precio.toFixed(2)}`)
})