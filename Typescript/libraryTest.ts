import { Library } from "./library";
import { Book } from "./books"


let libro1 = new Book("El marino rojo",100,"123456","pablo piro","la nueva");
let libro2 = new Book("El ave",500,"987123","el pajaro","El nido");

let libreria = new Library([libro1,libro2],"valencia","juan")

console.log(libreria.getAddress());
console.log(libreria.getManager());

libreria.setAddress("Barcelona");
libreria.setManager("Pedro");
libreria.toString();
libreria.getNumberOfBooks();
libreria.findByAuthor("pablo piro");