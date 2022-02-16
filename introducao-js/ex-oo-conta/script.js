class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) return `Saldo insuficiente`;
        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return `Valor depositado invalido`;
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Universitaria';
    }
    sacar(valor) {
        if (valor > this._saldo) return `Saldo insuficiente`;
        if(valor > 500) return `Limite de saque atingido`
        this._saldo -= valor;
        return this._saldo;
    }
}