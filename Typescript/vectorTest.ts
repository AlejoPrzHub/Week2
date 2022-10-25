import { Vector } from "./vector";

let numeros = new Vector(5,20);
let num = new Vector(5,15);
numeros.print();
console.log(numeros.add(num));
console.log(numeros.subs(num));
console.log(numeros.mult(num));
console.log(numeros.multNumber(5));