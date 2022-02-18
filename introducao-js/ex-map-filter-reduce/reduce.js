nums = [0, 1, 2, 3, 10];
const lista = [
    {
        name: 'sabao',
        price: 30,
    },
    {
        name: 'ceral',
        price: 12,
    },
    {
        name: 'toalha',
        price: 30,
    },
];
const saldoDisponivel = 100;

function somaNums(arr){
    return arr.reduce((prev, current) => {
        console.log({prev})
        console.log({current})
        return prev + current
    })
}

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce((prev, current, index) => {
        console.log('Rodada', ++ index);
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, saldoDisponivel)
}

console.log('O saldo final:', calculaSaldo(saldoDisponivel, lista));
console.log(saldoDisponivel, lista);