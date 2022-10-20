//////////
//RETO 6//
//////////
import { Book } from "./books"

let libro1 = new Book("El marino rojo",100,"123456","pablo piro","la nueva");
let libro2 = new Book("El ave",500,"987123","el pajaro","El nido");

export class Library
{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(bookss:Book[],address,manager)
    {
        this.books = bookss;
        this.address = address;
        this.manager = manager;
    }

    public getAddress():string{return this.address}
    public getManager():string{return this.manager}

    public setAddress(nuevoAddress:string):void{this.address = nuevoAddress}
    public setManager(nuevoManager:string):void{this.manager = nuevoManager} 

    public printAll():string
    {   let oe 
        for(let i=0;i< Book.length;i++){
        let oe ="Title: " + Book[i].title  + "\n" + "numero de Paginas: " + Book[i].nPages + "\n" + "ISBN: " + Book[i].isbn + "\n" + "Author: " + Book[i].author + "\n" + "Editorial: " + Book[i].editorial
    }return oe}
    
    public getNumberOfBooks ():number {return Library.length}
    public findByAuthor (authorrr:string):Book[]
    {if(Book.author.includes(authorrr)){return console.log(Book)}}
}