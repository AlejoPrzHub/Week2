//////////
//RETO 6//
//////////
import { Book } from "./books"

export class Library
{
    private bookss: Book[];
    private address: string;
    private manager: string;

    constructor(books:Book[],address:string,manager:string)
    {
        this.bookss = books;
        this.address = address;
        this.manager = manager;
    }

    public getAddress(){return this.address}
    public getManager(){return this.manager}

    public setAddress(nuevoAddress:string):void{this.address = nuevoAddress}
    public setManager(nuevoManager:string):void{this.manager = nuevoManager} 

    public toString():string
    {   
        let respuesta:string
        respuesta = " "
        for(let i=0;i< Book.length;i++)
        {
            respuesta ="Title: " + Book[i].title  + "\n" + "numero de Paginas: " + Book[i].nPages + "\n" + "ISBN: " + Book[i].isbn + "\n" + "Author: " + Book[i].author + "\n" + "Editorial: " + Book[i].editorial
        }
        return respuesta
    }
    
    public getNumberOfBooks():number {return Library.length}

    public findByAuthor (authorr:string)
    {
        let respuesta:Book[]
        respuesta = [];
        for(let i=0;i<this.bookss.length;i++)
        {
            if(this.bookss[i].author == authorr)  (respuesta.push(this.bookss[i]))
        } 
        return respuesta
    }
}
