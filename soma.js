export class Operacao{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    getSoma(){
        return this.num1+this.num2;
    }
    getSubtracao(){
        return this.num1-this.num2;
    }
    getMultiplicacao(){
        return this.num1*this.num2;
    }
    getDivisao(){
        return this.num1/this.num2;
    }
}