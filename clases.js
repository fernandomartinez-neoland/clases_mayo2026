export class clase {
  // dentro de una clase las variables no necesitan ser declaradas con "const" ni "let"
  primerNombre;
  // es quien recibe los parametros que se envian hacia la clase
  constructor(nombre) {
    this.primerNombre = nombre;
    console.log("hola ", this.primerNombre);
  }

  despedida(nombre) {
    console.log(`adios ${nombre}`);
  }
}

// HERENCIA
class padre {
  casa() {
    console.log("Tengo una casa");
  }
}
// la calse hijo es una extension del padre, lo cual le da acceso a los metodos del padre
export class hijo extends padre {}

// POLIMORFISMO

export class animal {
  hacerruido() {
    console.log("gruñe");
  }
}

export class perro extends animal {
  hacerruido() {
    console.log("ladra");
  }
}

export class gato extends animal {
  hacerruido() {
    console.log("maulla");
  }
}
