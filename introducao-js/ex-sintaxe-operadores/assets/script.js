function verificarNumeros(a, b) {
    const resultado = somaNumeros(a,b);
    
    if(a === b) {
        return `Os números ${a, b} são iguais. Sua soma e ${resultado}`
    } else {
        return `Os números ${a} e ${b} não são iguais. Sua soma e ${resultado}`
    }
}

function somaNumeros(a, b) {
    const soma = a + b;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }
    if (soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(verificarNumeros(9 , 2))