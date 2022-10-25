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

    add(v1:Vector):number[]
    {
        let respuesta:number[];
        respuesta = [];
        for(let i=0;i<v1.elements.length;i++)
        {
            respuesta[i]=v1.elements[i] + this.elements[i];
        }
        return respuesta
    }

    subs(v1:Vector):number[]
    {
        let respuesta:number[];
        respuesta = [];
        for(let i=0;i<v1.elements.length;i++)
        {
            respuesta[i]=v1.elements[i] - this.elements[i];
        }
        return respuesta
    }

    mult(v1:Vector):number[]
    {
        let respuesta:number[];
        respuesta = [];
        for(let i=0;i<v1.elements.length;i++)
        {
            respuesta[i]=v1.elements[i] * this.elements[i];
        }
        return respuesta
    }

    multNumber(n:number):number[]
    {
        let respuesta:number[];
        respuesta = [];
        for(let i =0;i<this.elements.length;i++)
        {
            respuesta[i]= n * this.elements[i]
        }
        return respuesta
    }

}
