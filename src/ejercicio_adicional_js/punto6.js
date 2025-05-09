const productos = [
    {descripcion: "Auriculares", precio: 49000.00}, 
    {descripcion: "Teclado", precio: 30000.00},
    {descripcion: "Mouse", precio: 20000.00},
    {descripcion: "Monitor", precio: 100000.00},
    {descripcion: "Parlante", precio: 15000.00},
]
let indiceMenor = 0;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio < productos[indiceMenor].precio) {
        indiceMenor = i;
    }
}

productos.splice(indiceMenor, 1);

console.log(productos);