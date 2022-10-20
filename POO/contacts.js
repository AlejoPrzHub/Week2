let personas = require("./person")
let Persona = personas.Person



class Contacts 
{
    constructor()
{
    this.array = [];
}

printPersons()
{
    for(let i = 0 ; i < this.array.length ; i++)
    {
        this.array[i].printAll(); 
    }

    // this.array.forEach(datos =>{console.log(datos)})
}
}

module.exports = {Contacts : Contacts}