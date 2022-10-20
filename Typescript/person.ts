//////////
//RETO 1//
//////////
export class Person
{
     public name:string;
    public age:number;
    private address:string;

    constructor(name:string,age:number,address:string)
    {
        this.name =name;
        this.age = age;
         this.address = address;
    }

        public printName():string    //Imprime por consola el nombre
        {
            return this.name;
        }

        public yearOfBirth(currentYear: number):number   //Calcula y devuelve el año de nacimiento
        {
            return currentYear - this.age;
        } 
        public setAddress(nueAddress:string)    //Modifica el atributo address con el valor pasado como parámetro
        {
            return this.address = nueAddress;
        } 
        public getAddress():string    //Devuelve el valor del atributo addess.
        {
            return this.address;
        }
        
}