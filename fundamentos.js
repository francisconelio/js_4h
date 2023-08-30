// Fundamentos
// Var nome = "valor"

var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);

//variáveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 5);
console.log("10" + 5);
console.log(typeof meuNumero ); //o 'typeof' diz o tipo de variável que o 'meuNUmero' no caso é um number

var booleano = true; // false

console.log( typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log( typeof meuObjeto)
console.log( typeof meuArray)
console.log( typeof meuNull)
console.log( typeof meuUndefined)

// let e const
// novas formas de declarar variáveis

let x = 10;
const y = 5;

x = 15;

console.log(typeof x);

console.log(x,y);

// Operadores aritméticos
console.log( x + y ); //soma
console.log( x - y); //substração
console.log  ( x * y ); //multiplicação
console.log( x / y); //divisão

// Operadores de comparação

console.log (x==y)
console.log (x!=y)

console.log ("5" == 5);

console.log ( "5" === 5);

console.log ( "5" !== 5);

// Operadores lógicos
// AND &&
// OR ||

console.log( 10 > 5 && 20 > 5)
console.log( 10 > 5 && 20 < 5)

console.log( 10 > 5 || 20 > 5)
console.log( 10 > 5 || 20 < 5)

//Conversão de tipos

const meuNumero2 = "123"  // "123"  texto
const meuNumeroConvertido = Number(meuNumero2)
console.log (meuNumeroConvertido)
console.log (typeof meuNumeroConvertido)

// Estrutura de condição - if, else, if else

const idade = 20;

if (idade < 13) {
 console.log("Criança")
} else if ( idade < 20) {
    console.log("Adolescente")
}
else {
    console.log("Adulto")
}

if(true) {
    console.log("executa")
} else {
    console.log("isso não executa")
}

// Switch
const fruta = "Mamão"

switch (fruta) { 
 case "Banana": console.log("Banana é a fruta")
 break;
 case "Maça": console.log("Maça é a fruta")
 break;
 default:
    console.log("Fruta não encontrada!")

}

// Estruturas de repetição
// 1,2,3,4,5,6...=> Dependendo da condição

// contador, condição de limite, incremento
for (let i = 0; i < 5; i++ )/* i = i + 5 ; é semelhante e i++ */  
{ 
    // concatenação
    console.log("O valor de i é: " + i)
}

// while
let k = 0;

while (k < 5){
    console.log("O valor de k é: " + k)
    k++;
}

// do while
let j = 0;

do {
    console.log("O valor de j é: " +j)
    j++

} while(j <5 );

//funções
//function nome(arg1, arg2) {corpo}

function cumprimentar (nome){
    console.log("olá!" + nome);
}
// invocação da função = nome()
cumprimentar("Nélio");

// escopo de variáveis
let cor = "azul";

function mostrarCor (){
    let cor = "verde";
    console.log(cor);
}

console.log (cor);

mostrarCor ();

//hoisting = içamento
testeHoisting ();

function testeHoisting() {
    console.log("Deu certo!");
}

// arrow function
const testeArrow = () => console.log("Isto também é uma função")
testeArrow();

// truthy and falsy
const minhaVariavel1 = ""; // falsy
const minhaVariavel2 = "Algum texto" //truthy

if(minhaVariavel1) {
    console.log("É verdadeiro!")
} else {
    console.log("É falso!")
}


if(minhaVariavel2) {
    console.log("É verdadeiro!")
} else {
    console.log("É falso!")
}

// array, listas

const numeros = [0,1,2,3,4,5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
numeros.push(6); //método push acrescenta o numero entre parênteses no final da lista
console.log(numeros);




