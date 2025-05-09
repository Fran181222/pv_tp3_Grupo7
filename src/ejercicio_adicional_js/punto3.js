const productos = [
    {descripcion: "Auriculares", precio: 49000.00}, 
    {descripcion: "Teclado", precio: 30000.00},
    {descripcion: "Mouse", precio: 20000.00},
    {descripcion: "Monitor", precio: 100000.00},
    {descripcion: "Parlante", precio: 15000.00},
]

//Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map.
const productosconIVA = productos.map(producto =>{
    return {
        descripcion: producto.descripcion,
        precio: producto.precio*1.21
    };
})

productosconIVA.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio con IVA: $${producto.precio.toFixed(2)}`);
});