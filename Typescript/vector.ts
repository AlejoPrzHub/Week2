export class Vector
{
    private elements:number[];

    constructor(n:number,k:number)
    {
        this.elements=[];
        
        for(let i =0;i<n;i++)
        {
            this.elements.push(Math.floor(Math.random() * (k - 0 + 1)) + 0) 
        } 
        
    }

    print(){console.log(this.elements)};

    add(v1:Vector)
    {
        let respuesta:number[];
        respuesta = [];
        for(let i=0;i<v1.elements.length;i++)
        {
            respuesta[i]=v1[i] + this.elements[i];
        }
        console.log(respuesta)
    }

    subs(v1:Vector)
    {
        let respuesta:number[];
        respuesta = [];
        for(let i=0;i<v1.elements.length;i++)
        {
            respuesta[i]=v1[i] - v1.elements[i];
        }
        console.log(respuesta)
    }

    mult(v1:Vector)
    {
        let respuesta:number[];
        respuesta = [];
        for(let i=0;i<v1.elements.length;i++)
        {
            respuesta[i]=v1[i] * v1.elements[i];
        }
        console.log(respuesta)
    }

    multNumber(n:number)
    {
        for(let i =0;i<=n;i++)
        {
           return n * this.elements[i]
        }
    }

}
