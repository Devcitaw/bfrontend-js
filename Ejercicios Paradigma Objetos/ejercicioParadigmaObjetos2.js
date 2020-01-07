class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

const persona = new Persona("Ada", "Lovelace");

console.log(persona.nombreCompleto());
// Ada Lovelace
