//////////
//RETO 5//
//////////
import { Book } from "./books"

let libro1 = new Book("El marino rojo",100,"123456","pablo piro","la nueva");
                
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getNPages());
console.log(libro1.getTitle());
                
libro1.setTitle("El Guerrero");
libro1.setNPages(200);
libro1.setIsbn("654321");
libro1.setAuthor("Geronimo");
libro1.setEditorial("La Antigua");
                
console.log(libro1.printAll());  