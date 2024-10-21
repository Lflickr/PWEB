function submeter(){
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let res = document.getElementById("res")
    let resultado = classificar(calcular(peso, altura))
    res.innerHTML = `Resultado: ${resultado}`
}

function calcular(p, a){
    return (p/(a*a))
}

function classificar(imc){
    let retorno
    switch(true){
        case imc < 18.5:
            retorno = "Abaixo do Peso"
            break;
        case imc >= 18.5 && imc < 25:
            retorno = "Normal"
            break;
        case imc >= 25 && imc < 30 :
            retorno = "Sobrepeso - Obesidade grau I"
            break;
        case imc >= 30 && imc < 40:
            retorno = "Obesidade - Obesidade Grau II"
            break;
        default:
            retorno = "Obesidade Grave - Obesidade Grau III"
    }

    return retorno
}

