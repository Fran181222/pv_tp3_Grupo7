const productos = [
    {descripcion: "Auriculares", precio: 49000}, 
    {descripcion: "Teclado", precio: 30000},
    {descripcion: "Mouse", precio: 20000},
    {descripcion: "Monitor", precio: 100000},
    {descripcion: "Parlante", precio: 15000},
]

//Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter
const productosFiltrados = productos.filter(producto => producto.precio >20000);

console.log(productosFiltrados);