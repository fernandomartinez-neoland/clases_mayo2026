export class clase{
    // dentro de una clase las variables no necesitan ser declaradas con "const" ni "let"
    primerNombre
    // es quien recibe los parametros que se envian hacia la clase
    constructor (nombre){
        this.primerNombre=nombre
        console.log("hola ", this.primerNombre)
    }
}