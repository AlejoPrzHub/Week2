import { Vector } from "./vector";

let numeros = new Vector(5,20);
let num = new Vector(5,15);
numeros.print();
numeros.add(num);
numeros.subs(num);
numeros.mult(num);
console.log(numeros.multNumber(5));