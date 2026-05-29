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

// HERENCIA CON SUPER: es una manera de usar las variables del padre desde la clase del hijo

export class superPadre {
  nombre = "pepito";
}

export class superHijo extends superPadre {
  constructor(nombre) {
    super(nombre);
  }
  metodo() {
    console.log("super hijo: ", this.nombre);
  }
}

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


// CALLBACK


export class emisor{
    imprimir(){
        console.log("meotodo del emisor")
    }
}

export class receptor{
    callback
    constructor (callback){
        this.callback=callback
    }

    imprimirCallback(){
       this.callback.imprimir() 
    }

}