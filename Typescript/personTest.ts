//////////
//RETO 2//
//////////

import { Person } from "./person"

let person1 = new Person("Jose",27,"Madrid");
let person2 = new Person("Fernando",50,"Alicante");
let person3 = new Person("Jessica",25,"Valencia");
                
console.log(person1.printName());
console.log(person1.yearOfBirth(2022));
console.log(person1.getAddress());
console.log(person1.setAddress("Barcelona"));