var funcionario1 = {
    matricula: "213343",
    nome: "Jose Alberto",
    funcao: "DBA"
}
console.log(`matricula=${funcionario1.matricula} nome=${funcionario1.nome} funcao=${funcionario1.funcao}`)

var funcionario2 = new Object()
funcionario2.matricula = "2033211"
funcionario2.nome = "Ricardo Gomes"
funcionario2.funcao = "Analista Junior de tamanho de penis"
console.log(`matricula=${funcionario2.matricula} nome=${funcionario2.nome} funcao=${funcionario2.funcao}`)

class Funcionario{
    constructor(){
        this.matricula
        this.nome
        this.funcao
    }
    setMatricula(val){
        this.matricula = val
    }
    getMatricula(){
        return this.matricula
    }
    setNome(val){
        this.nome = val
    }
    getNome(){
        return this.nome
    }
    setFuncao(val){
        this.funcao = val
    }
    getFuncao(){
        return this.funcao
    }
}

var funcionario3 = new Funcionario()
funcionario3.setMatricula("198823")
funcionario3.setNome("Lucas Souza")
funcionario3.setFuncao("Engenheiro de Software")
console.log(`matricula=${funcionario3.getMatricula()} nome=${funcionario3.getNome()} funcao=${funcionario3.getFuncao()}`)