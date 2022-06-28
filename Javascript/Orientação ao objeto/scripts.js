class contaBancaria {
    construtor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada!";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

}

class ContaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, cartaoCredito);
        this.tipo = 'contaCorrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this.cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;

    }

}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }

    sacar(valor){
        if(valor > 500) {
            return "Operação negada!"
        }

        this._saldo = this._saldo - valor;
    }

}
