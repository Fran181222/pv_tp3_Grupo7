const productos = [
    {descripcion: "Auriculares", precio: 49000}, 
    {descripcion: "Teclado", precio: 30000},
    {descripcion: "Mouse", precio: 20000},
    {descripcion: "Monitor", precio: 100000},
    {descripcion: "Parlante", precio: 15000},
]

let indiceMenor = 0;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio < productos[indiceMenor].precio) {
        indiceMenor = i;
    }
}

productos.splice(indiceMenor, 1);

console.log(productos);