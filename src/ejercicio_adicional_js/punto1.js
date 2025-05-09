const productos = [
    {descripcion: "Auriculares", precio: 49000.00}, 
    {descripcion: "Teclado", precio: 30000.00},
    {descripcion: "Mouse", precio: 20000.00},
    {descripcion: "Monitor", precio: 100000.00},
    {descripcion: "Parlante", precio: 15000.00},
]

//Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio:$[precio]", usando forEach.
productos.forEach (producto=>{
    console.log (`Producto: ${producto.descripcion} Precio: ${producto.precio.toFixed(2)}`)
})