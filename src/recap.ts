// const myName = "Nicolas";
// const myAge = 12;

const suma = (a: number, b: number) => a + b;

suma(1, 2);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name} and my age is ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nico');

nicolas.getSummary();
