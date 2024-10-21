function abrir(){
    var img = document.getElementById("imagem")
    var titulo = document.getElementById("titulo")
    titulo.innerText = "Janela Aberta"
    img.innerHTML = '<img id="img" src="imagens/aberta.png" alt="janela aberta" onmouseleave="fechar()" onclick="quebrar()">'
}

function fechar(){
    var img = document.getElementById("imagem")
    var titulo = document.getElementById("titulo")
    titulo.innerText = "Janela Fechada"
    img.innerHTML =  '<img id="img" src="imagens/fechada.png" alt="janela fechada" onmouseover="abrir()" onclick="quebrar()">'
}

function quebrar(){
    var img = document.getElementById("imagem")
    var titulo = document.getElementById("titulo")
    titulo.innerText = "Janela Quebrada"
    img.innerHTML =  '<img id="img" src="imagens/quebrada.png" alt="janela quebrada">'
}