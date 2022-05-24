// o que ~sao vetores ou arrays

/*como declara um array
let array =['string', 1, true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

//forEache
array.forEach(function(item, index){console.log(item, index)});