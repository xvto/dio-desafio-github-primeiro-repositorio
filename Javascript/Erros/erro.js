 function validaArray(arr, num) {
     try{ {
     
        if(!arr && !num) throw new ReferenceError("Envie os parêmtros");
    
        if(typeof arr !== 'object') 
            throw new TypeError("Array percisa ser do tipo object!");
    
        if(typeof arr !== 'number') 
            throw new TypeError("Num percisa ser do tipo number!");
    
        if(arr.length !== num) 
            throw new RangeError("Tamanho inválido!");
 }
        return arr;
     }
     catch(e){
        if(e instanceof ReferenceError) {
              console.log("Este erro é um ReferenceError!")
              console.log(e.message);   
            } else if (e instanceof TypeError) {
              console.log("Este erro é um TypeError!")
              console.log(e.message);   
            } else if (e instanceof RangeError) {
              console.log("Tipo de erro não esperado:" + e)
              console.log(e.message);   
     }
 }
 }

 console.log(validaArray());