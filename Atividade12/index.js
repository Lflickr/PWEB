function Retangulo(x,y){
    var base = x;
    var altura = y;
    var area;

    this.calcArea=function(){
        area = base * altura
        return area;
    }
}
var base = prompt("Digite a base do retangulo")
var altura = prompt("Digite a altura do retangulo")
var retangulo = new Retangulo(base,altura)
alert(`A área do retangulo é ${retangulo.calcArea()}`)

class Conta{
    constructor(){
        this.nome
        this.banco
        this.numConta
        this.saldo
    }
    getNome(){
        return this.nome
    }
    setNome(val){
        this.nome = val
    }
    getBanco(){
        return this.banco
    }
    setBanco(val){
        this.banco = val
    }
    getNumConta(){
        return this.numConta
    }
    setNumConta(val){
        this.numConta = val
    }
    getSaldo(){
        return this.saldo
    }
    setSaldo(val){
        this.saldo = val
    }
}

class ContaCorrente extends Conta{
    constructor(){
        super()
        this.saldoEspecial
    }
    getSaldoEspecial(){
        return this.saldoEspecial
    }
    setSaldoEspecial(val){
        this.saldoEspecial = val
    }
}

class ContaPoupanca extends Conta{
    constructor(){
        super()
        this.juros
    }
    getJuros(){
        return this.juros
    }
    setJuros(val){
        this.juros = val
    }
}

var nome = prompt("Digite o nome do correntista")
var banco = prompt("Digite o nome do banco")
var conta = prompt("Digite o numero da conta")
var saldo = prompt("Digite o valor do saldo")
var especial_juros = prompt("Digite o valor do saldo especial")

var cc = new ContaCorrente()

cc.setNome(nome)
cc.setBanco(banco)
cc.setNumConta(conta)
cc.setSaldo(saldo)
cc.setSaldoEspecial(especial_juros)

alert("Conta Corrente criada com sucesso")

nome = prompt("Digite o nome do correntista")
banco = prompt("Digite o nome do banco")
conta = prompt("Digite o numero da conta")
saldo = prompt("Digite o valor do saldo")
especial_juros = prompt("Digite o valor dos juros")

var cp = new ContaPoupanca()

cp.setNome(nome)
cp.setBanco(banco)
cp.setNumConta(conta)
cp.setSaldo(saldo)
cp.setJuros(especial_juros)

alert("Conta Poupanca criada com sucesso")

alert(`Conta Corrente {\n
    nome do correntista: ${cc.getNome()}\n
    banco: ${cc.getBanco()}\n
    Numero da conta: ${cc.getNumConta()}\n
    Saldo: ${cc.getSaldo()}\n
    Saldo Especial: ${cc.getSaldoEspecial()}
    }`)

alert(`Conta Poupanca {\n
    nome do correntista: ${cp.getNome()}\n
    banco: ${cp.getBanco()}\n
    Numero da conta: ${cp.getNumConta()}\n
    Saldo: ${cp.getSaldo()}\n
    Juros: ${cp.getJuros()}
    }`)