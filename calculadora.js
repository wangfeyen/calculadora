
import {Operacao} from "./soma.js";
import Prompt from "prompt-sync";
const prompt=Prompt();

export class Calculadora{
    
    constructor(){
        this.num1=0;
        this.num2=0;
        this.operacao;
        this.iniciou=0;
        this.resultado;
        this.demooperacao;
    }
    
        
    identoperacao(){
        const op = new Operacao(this.num1,this.num2)
        switch(this.operacao){
            case "+":
                this.resultado = op.getSoma();
                break;
            case "-":
                this.resultado=op.getSubtracao();
                break;
            case "*":
                this.resultado=op.getMultiplicacao();
                break;
            case "/":
                this.resultado=op.getDivisao();
                break;
            
        }
    }  
    ativar(){
        if(this.iniciou===0){
            this.num1=parseFloat(prompt("número: "));
            this.demooperacao = this.num1
            this.operacao = prompt("operação: ");
            this.iniciou = 1;
        }
        this.num2=parseFloat(prompt("número: "));  
        this.demooperacao = `${this.demooperacao} ${this.operacao} ${this.num2} `
        this.identoperacao();
        console.log(this.demooperacao,"(",this.resultado,")");
        let igualouoperador=prompt("operação: ")
        if(igualouoperador!=="="){
            this.operacao=igualouoperador;
            this.num1=this.resultado;
            this.ativar()
        }else{
            console.log(this.resultado);
            const resp = prompt("Você quer calcular novamente? (Responda 's' para 'sim' e 'n' para 'não') ")
            if(resp=="s"){
                this.iniciou=0;
                this.ativar()
            }
        }
    }
    
}
const calc = new Calculadora();
calc.ativar()