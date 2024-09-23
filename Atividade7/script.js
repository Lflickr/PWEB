function jogar(n) {
    var r = Math.random()
    var jogador = document.getElementById('jogadorimg')
    var pc = document.getElementById('pcimg')
    var fim = document.getElementById('fim')
    switch (n) {
        case 0:
            jogador.src = 'imagens/papel.png'
            break
        case 1:
            jogador.src = 'imagens/tesoura.png'
            break
        case 2:
            jogador.src = 'imagens/pedra.png'
            break
    }
    if (r <= 0.33) {
        //pc jogou pedra
        pc.src = 'imagens/pedra.png'
        if (n == 0) {
            fim.innerHTML = `<p>Você ganhou</p>`
        } else if (n == 2) {
            fim.innerHTML = `<p>Empatou</p>`
        } else {
            fim.innerHTML = `<p>Você Perdeu</p>`
        }
    } else if (r <= 0.66) {
        //pc jogou papel
        pc.src = 'imagens/papel.png'
        if (n == 1) {
            fim.innerHTML = `<p>Você ganhou</p>`
        } else if (n == 0) {
            fim.innerHTML = `<p>Empatou</p>`
        } else {
            fim.innerHTML = `<p>Você Perdeu</p>`
        }
    } else {
        //pc jogou tesoura
        pc.src = 'imagens/tesoura.png'
        if (n == 2) {
            fim.innerHTML = `<p>Você ganhou</p>`
        } else if (n == 1) {
            fim.innerHTML = `<p>Empatou</p>`
        } else {
            fim.innerHTML = `<p>Você Perdeu</p>`
        }
    }
}