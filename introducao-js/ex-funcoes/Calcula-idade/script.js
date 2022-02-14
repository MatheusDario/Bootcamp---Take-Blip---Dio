function calculaIdade(anos) {
    return `Daqui a ${anos}, anos, ${this.nome} tera ${this.idade + anos} anos de idade `;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};


console.log(calculaIdade.apply(pessoa1, [5]))