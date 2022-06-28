/* const pessoa = {
    firstName: 'André',
    lastName:  'Soares',
    id      :  1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }, 
    getId: function(){
        return this.id;
    }
};

pessoa.fullName();
// Andé Soares

pessoa.getId();
// 1 */



/* Call

const pessoa = {
	nome: 'Miguel',
};

const animal = {
	nome: 'Murphy',
};

function getSomething() {
	console.log(this.nome);
}

getSomething.call(pessoa) //EXEMPLO 1



const pessoa = {
	nome: 'Miguel',
};

const animal = {
	nome: 'Murphy',
};

function getSomething() {
	console.log(this.nome);
}

getSomething.call(animal)//EXEMPLO 2 */


/* É POSSIVEL PASSAR PARAMETROS PARA ESSA FUNÇÃO SEPARANDO=OS POR VÍRGULAS.


const myObj = {
	num:1,
	num:2,
};

function soma(a, b) {
	console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); */

/* Apply

const pessoa = {
	nome: 'Miguel',
};

const animal = {
	nome: 'Godi',
};

function getSomething() {
	console.log(this.nome);
}

getSomething.apply(pessoa)// no terminal volta "Miguel"

const pessoa = {
	nome: 'Miguel',
};

const animal = {
	nome: 'Godi',
};

function getSomething() {
	console.log(this.nome);
}

getSomething.apply(Animal)// no terminal volta "Godi" */

// APPLY DENTRO DE UM ARRAY

/* const myObj = {
    num: 2,
    num: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); */


/* BIND = 

CLONA A ESTRUTURA DA FUNÇÃO ONDE É CHAMADA E APLICA O VALOR DO OBJETO PASSADO COMO PARAMETRO */

 /* const retornaNomes = function () {
    return this.nome;
};

let bruno = retornaNome.bind({ nome: 'Bruno' });

bruno() */