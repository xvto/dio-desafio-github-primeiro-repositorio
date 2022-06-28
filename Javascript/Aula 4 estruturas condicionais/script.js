/*var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('jogador1 marcou ponto!');
}   else if (jogador2 > 0)
    console.log('jogador 2 marcou ponto!');
    else {
    console.log('Ninguém marcou ponto!');
} */
 
// Funciona como uma repetição de instrução até que a condição seja falsa:
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3'}

/*
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)/
} */

/*Funciona como uma repetição a partir de uma propriedade:
// com array
for (let i in array){
    console.log(i);
}

// for/in com object
for (i in object) {
    console.log(i);
} */

/*for(i of array) {
    console.log(i);
} */

var a = 0;
while(a < 10){
    a++;
    console.log(a)
}

do{
    a++;
    console.log(a);
} while(a < 10);