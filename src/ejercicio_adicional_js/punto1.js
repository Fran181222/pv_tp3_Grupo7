const productos = [
    {descripcion: "Auriculares", precio: 49000}, 
    {descripcion: "Teclado", precio: 30000},
    {descripcion: "Mouse", precio: 20000},
    {descripcion: "Monitor", precio: 100000},
    {descripcion: "Parlante", precio: 15000},
]

//Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio:$[precio]", usando forEach.
productos.forEach (producto=>{
    console.log (`Producto: ${producto.descripcion} Precio: ${producto.precio}`)
})