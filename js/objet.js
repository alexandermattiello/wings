class Producto {

    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const Producto1 = new Producto('Bender',1500)
const Producto2 = new Producto('Charmander',500)
const Producto3 = new Producto('Mini-DarthVader',250)

console.log(Producto1);
console.log(Producto2);
console.log(Producto3);