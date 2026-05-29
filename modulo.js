import { clase, hijo, animal, gato, perro, superHijo, emisor, receptor } from "./clases.js";

const consola = new clase("fernando");

consola.despedida("Bejamin");

// herencia: la clase hijo tiene acceso a los metodos del padre
const heredero = new hijo();

heredero.casa();


// herencia con super
    const hijito=new superHijo()
    hijito.metodo()


// POLIMORFISMO: aunque las clases hijos comparten el mismo metodo, cada uno actua a su manera

const animales = new animal();
const perrito = new perro();
const michi = new gato();

// esto se hace cuando queremos ejecutar varias clases en un solo ciclo, basicamente se le da el mismo nombre de metodo a todas las clases y dentro de un ciclo, con un arreglo que contenga el nombre de las clases y un foreach que los recorra, se ejecutan nombrando al mismo metodos
animales.hacerruido();
perrito.hacerruido();
michi.hacerruido();



// CALLBACK

const recibirC= new receptor(new emisor)

recibirC.imprimirCallback()