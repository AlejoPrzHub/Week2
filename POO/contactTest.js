//RETO 8
let contactos = require("./contacts");
let contacto = contactos.Contacts;

let personas = require("./person");
let persona = personas.Person;

let juan = new persona("perez",20,180,60,"ondulado","marron","negros",["patinar","surfear"]);
let juanita = new persona("escobar",55,170,50,"liso","negro","verdes",["leer","viajar"]);
let juanito = new persona("gomez",60,186,80,"largo","azul","azules",["cocinar","caminar"]);



let libreta = new contacto();
libreta.array.push(juan);
libreta.array.push(juanita);
libreta.array.push(juanito);

libreta.printPersons();
// console.log(libreta);