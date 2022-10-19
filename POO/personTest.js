//RETO6
let personas = require("./person")
let persona = personas.Person

let juan = new persona("perez",20,180,60,"ondulado","marron","negros",["patinar","surfear"])
console.log(juan.printAll());
console.log(juan.printHobbies());
juan.iMC();