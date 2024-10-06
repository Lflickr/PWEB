var idade=[]
var sexo=[]
var opiniao=[]

function submeter(){
    var i = Number(document.getElementById('idade').value);
    var sVet = document.getElementsByName('sexo');
    var o = Number(document.getElementById('opiniao').value);
    var s
    for(let j = 0; j < sVet.length; j++ ){
        if(sVet[j].checked){
            s = sVet[j].value;
            break;
        }
    }

    idade.push(i)
    sexo.push(s)
    opiniao.push(o)

    mediaIdade()
    maisVelha()
    maisNova()
    qtdPessimo()
    otimoBom()
    homemMulher()
}

function mediaIdade(){
    var mediaIdade = 0
    var res = document.querySelector('p#medId')
    for(let i = 0; i < idade.length; i++){
        mediaIdade += idade[i]
    }
    mediaIdade /= idade.length

    res.innerHTML = `Media das idades: ${mediaIdade}`
}

function maisVelha(){
    var maior
    var idadeBKP = []
    var res = document.querySelector('p#velha')
    for(let i = 0; i < idade.length; i++){
        idadeBKP.push(idade[i])
    }
    idadeBKP.sort((a,b)=>a-b)
    maior = idadeBKP[(idadeBKP.length-1)]
    res.innerHTML =`A pessoa mais velha tem ${maior} anos`
}

function maisNova(){
    var menor
    var idadeBKP = []
    var res = document.querySelector('p#nova')
    for(let i = 0; i < idade.length; i++){
        idadeBKP.push(idade[i])
    }
    idadeBKP.sort((a,b)=>a-b)
    menor = idadeBKP[0]
    res.innerHTML =`A pessoa mais nova tem ${menor} anos`
}

function qtdPessimo(){
    var qtdPess = 0
    var res = document.querySelector('p#pessimo')
    for(let i=0; i<opiniao.length; i++){
        if(opiniao[i] == 1){
            qtdPess++
        }
    }
    res.innerHTML = `${qtdPess} pessoa(s) avaliaram como Pessimo`
}

function otimoBom(){
    var res = document.querySelector('p#otmBom')
    var perc = 0;

    for(let i=0; i<opiniao.length; i++){
        if(opiniao[i] == 4 || opiniao[i]==3){
            perc++
        }
    }

    perc /= opiniao.length
    perc *= 100

    res.innerHTML = `<p>${perc}% das pessoas avaliaram como otimo ou bom</p>` 
}

function homemMulher(){
    var qtdMulher =0
    var qtdHomem =0
    var res = document.querySelector('p#homMul')
    for(let i = 0; i<sexo.length; i++){
        if(sexo[i] == 'M'){
            qtdHomem++
        }else{
            qtdMulher++
        }
    }

    res.innerHTML = `<p>${qtdHomem} homem(s) responderam ao questinario e ${qtdMulher} mulher(s) responderam ao questionario</p>`
}