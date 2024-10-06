function maior(){
    var num = [Number(window.document.getElementById('val1').value), 
               Number(window.document.getElementById('val2').value), 
               Number(window.document.getElementById('val3').value)]
    var maior = num[0]
    
    var res = window.document.getElementsByClassName('res')[0]
    for(let i = 0; i < num.length; i++){
        if(num[i] > maior){
            maior = num[i]
        }
    }

    res.innerHTML = `<p>O maior valor é ${maior}</p>`
}

function ordenar(){
    var num = [Number(window.document.getElementById('num1').value), 
               Number(window.document.getElementById('num2').value), 
               Number(window.document.getElementById('num3').value)]
    
    var res = window.document.getElementsByClassName('res')[1]

    num.sort( (a,b) => a-b)
    res.innerHTML = `<p>Ordem crescente ${num[0]} ${num[1]} ${num[2]}</p>`        
}

function palindromo(){
    var palavra = String(document.getElementById('pal').value)
    var res = window.document.getElementsByClassName('res')[2]
    var ehPalindromo = false
    palavra = palavra.toUpperCase()
    for(let i = 0, j = (palavra.length - 1); i < (palavra.length/2); i++, j--){
        if(palavra.charAt(i) == palavra.charAt(j)){
            ehPalindromo = true
        }else{
            ehPalindromo = false
            break
        }
    }
    if(ehPalindromo){
        res.innerHTML = `<p>A palavra ${palavra} é um palindromo</p>`
    }else{
        res.innerHTML = `<p>A palavra ${palavra} não é um palindromo</p>`
    }
}

function triangulo(){
    var ladoA = Number(window.document.getElementById('lado1').value)
    var ladoB = Number(window.document.getElementById('lado2').value)
    var ladoC = Number(window.document.getElementById('lado3').value)
    var res = window.document.getElementsByClassName('res')[3]
    if(ladoA > Math.abs(ladoB - ladoC) && ladoA < (ladoB + ladoC) &&
        ladoB > Math.abs(ladoA - ladoC) && ladoB < (ladoA + ladoC) &&
        ladoC > Math.abs(ladoA - ladoB) && ladoC < (ladoA + ladoB))
    {
        res.innerHTML = `<p>O triangulo de lados ${ladoA}, ${ladoB} e ${ladoC} é valido</p>`
        if(ladoA == ladoB && ladoB == ladoC){
            res.innerHTML += `<p>Tipo de triangulo: equilatero</p>` 
        } else if(ladoA == ladoB && ladoA != ladoC ||
                  ladoB == ladoC && ladoB != ladoA ||
                  ladoC == ladoA && ladoC != ladoB){
            res.innerHTML += `<p>Tipo de triangulo: Isoceles</p>`
        } else{
            res.innerHTML += `<p>Tipo de triangulo: Escaleno</p>`
        }
    } else{
        res.innerHTML = `<p>O triangulo de lados ${ladoA}, ${ladoB} e ${ladoC} não é valido</p>`   
    }
}