////////////
//RETO 3.4//     Probar la clase contacts en un fichero denominado contactsTest.ts
////////////
import { Contacts } from "./contacts"
import { Person } from "./person"
                
let person1 = new Person("Jose",27,"Madrid");
let person2 = new Person("Fernando",50,"Alicante");
let person3 = new Person("Jessica",25,"Valencia");
                
let agenda = new Contacts();
agenda.people.push(person1);
agenda.people.push(person2);
agenda.people.push(person3);
                
agenda.printCalendar();




                