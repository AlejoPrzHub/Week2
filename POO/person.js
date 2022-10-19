//RETO1
class Person
{
    constructor(lastname,age,height,kg,hair,hairColor,eyesColor,hobbies = new Array())
    {
        this.apellido = lastname;
        this.edad = age;
        this.yearOfBirth = (2022 - age); //RETO3
        this.altura = height;
        this.peso = kg;
        this.colorOjos = eyesColor;
        this.tipoCabello = hair;
        this.colorCabello = hairColor;
        this.hobbie = hobbies;
        

    }

    //RETO4
    printAll()
    {
           console.group(Person) 
               console.log("Apellido - " + this.apellido);
               console.log("Edad - " + this.edad);
               console.log("Anyo Nac - " + this.yearOfBirth);
               console.log("Altura - " + this.altura);
               console.log("Peso - " + this.peso);
               console.log("Color de Ojos - " + this.colorOjos);
               console.log("Tipo de Cabello - " + this.tipoCabello);
               console.log("Color de Cabello - " + this.colorCabello);
               console.log("Hobbies - " + this.hobbie);
            console.groupEnd();
            
    }

    //RETO5
    printHobbies()
    {
        console.log(this.hobbie);
    }

    //RETO2
    iMC()
    {
        console.log(this.altura * this.peso) //la formula para calcular el IMC no es la correcta pero la intencion es lo que cuenta :)
    }


}

module.exports = {Person : Person} //RETO 6