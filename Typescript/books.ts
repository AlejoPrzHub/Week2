//////////
//RETO 4//
//////////
export class Book
{
    private title: string;
    private nPages: number;
    private isbn: string;
    public author: string;
    private editorial: string;

    constructor(title:string,nPages:number,isbn:string,author:string,editorial:string)
    {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    public getTitle():string{return this.title}
    public getNPages():number{return this.nPages}
    public getIsbn():string{return this.isbn}
    public getAuthor():string{return this.author}
    public getEditorial():string{return this.editorial}

    public setTitle(nuevoTitle:string):void{this.title = nuevoTitle}
    public setNPages(nuevoNPages:number):void{this.nPages = nuevoNPages}
    public setIsbn(nuevoIsbn:string):void{this.isbn = nuevoIsbn}
    public setAuthor(nuevoAuthor:string):void{this.author = nuevoAuthor}
    public setEditorial(nuevoEditorial:string):void{this.editorial = nuevoEditorial}

    public printAll():string
    {
        return "Title: " + this.title + "\n" + "numero de Paginas: " + this.nPages + "\n" + "ISBN: " + this.isbn + "\n" + "Author: " + this.author + "\n" + "Editorial: " + this.editorial 
    }
}
