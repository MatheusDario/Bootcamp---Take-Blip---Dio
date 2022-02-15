function debugError(arr, num) {
   try {
    if(!arr && !num) throw new ReferenceError('parametros nao enviados');
    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
    if(typeof num !== 'number') throw new TypeError('O numero precisa ser do tipo number');
    if(arr.length !== num) throw new RangeError('Tamanho invalido');

    return arr;
   } catch(e){
    if(e instanceof ReferenceError) {
        console.log('Este erro e um ReferenceError')
        console.log(e.message)
    } else if (e instanceof TypeError) {
        console.log('Este erro e um TypeError')
        console.log(e.message)
    } else if (e instanceof RangeError) {
        console.log('Este erro e um RangeError')
        console.log(e.message)
    } else {
        console.log('Este erro nao e esperado' + e);
    }
   }
}

console.log(debugError([1,2,3,4,5], 5));