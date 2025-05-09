const productos = [
    {descripcion: "Auriculares", precio: 49000}, 
    {descripcion: "Teclado", precio: 30000},
    {descripcion: "Mouse", precio: 20000},
    {descripcion: "Monitor", precio: 100000},
    {descripcion: "Parlante", precio: 15000},
]

productos.sort((a,b) => a.precio - b.precio);
console.log(productos);