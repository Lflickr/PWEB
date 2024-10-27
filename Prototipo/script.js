const $modal = document.getElementById("modal")
const $tituloInput = document.getElementById("titulo")
const $descricaoInput = document.getElementById("descricao")
const $prioridadeInput = document.getElementById("prioridade")
const $prazoInput = document.getElementById("prazo")
const $criarEmImput = document.getElementById("criar-em")
const $responsaveisInput = document.getElementById("responsaveis")
const $idInput = document.getElementById('idInput')

const $colunaEstudoCorpo = document.querySelector('#colunaEstudo .corpo .listaCard')
const $colunaProgressoCorpo = document.querySelector('#colunaProgresso .corpo .listaCard')
const $colunaConcluidoCorpo = document.querySelector('#colunaConcluido .corpo .listaCard')

const $tituloCriacao = document.getElementById('tituloModoCriacao')
const $tituloEdicao = document.getElementById('tituloModoEdicao')
const $btnCadastrar = document.getElementById('create')
const $btnEditar = document.getElementById('edit')
const $btnExcluir = document.getElementById('excluir')

var cardList = []

var cont = 0

function abrirModal(dataColumn = 1) {
    $modal.style.display = 'flex'
    $tituloCriacao.style.display = 'block'
    $tituloEdicao.style.display = 'none'

    $btnCadastrar.style.display = 'block'
    $btnEditar.style.display = 'none'
    $btnExcluir.style.display = 'none'

    $criarEmImput.value = String(dataColumn)
}
function abrirModalEdit(id) {
    $modal.style.display = 'flex'

    $tituloCriacao.style.display = 'none'
    $tituloEdicao.style.display = 'block'
    $btnCadastrar.style.display = 'none'
    $btnEditar.style.display = 'block'
    $btnExcluir.style.display = 'block'
    var index = cardList.findIndex(tarefa => tarefa.id == id)
    var task = cardList[index]

    $idInput.value = task.id
    $tituloInput.value = task.titulo
    $descricaoInput.value = task.descricao
    $prioridadeInput.value = task.prioridade
    $prazoInput.value = task.prazo
    $criarEmImput.value = task.status
    $responsaveisInput.value = task.responsaveis

}

function fecharModal() {
    $modal.style.display = 'none'

    $idInput.value = null
    $tituloInput.value = null
    $descricaoInput.value = null
    $prioridadeInput.value = 'baixa'
    $prazoInput.value = null
    $criarEmImput.value = '1'
    $responsaveisInput.value = null
}

function criarTarefa() {

    const novaTarefa = {
        id: ++cont,
        titulo: $tituloInput.value,
        descricao: $descricaoInput.value,
        prioridade: $prioridadeInput.value,
        prazo: $prazoInput.value,
        status: Number($criarEmImput.value),
        responsaveis: $responsaveisInput.value
    }
    cardList.push(novaTarefa)
    criarCard()
    fecharModal()
}

function resetarColunas() {
    document.querySelector('[data-column = "1"] .corpo .listaCard').innerHTML = ''
    document.querySelector('[data-column = "2"] .corpo .listaCard').innerHTML = ''
    document.querySelector('[data-column = "3"] .corpo .listaCard').innerHTML = ''
}

function criarCard() {
    resetarColunas()
    cardList.forEach(tarefa => {

        const coluna = document.querySelector(`[data-column="${String(tarefa.status)}"] .corpo .listaCard`)
        const card = `
        <div 
            id="${tarefa.id}"
            class="card" 
            ondblclick="abrirModalEdit(${tarefa.id})" 
            draggable="true" 
            ondragstart="dragstartHandler(event)">
            <div class="info">
                <strong>Titulo: </strong>
                <span>${tarefa.titulo}</span>
            </div>
            <div class="info">
                <strong>Descrição: </strong>
                <span>${tarefa.descricao}</span>
            </div>
            <div class="info">
                <strong>Prioridade: </strong>
                <span>${tarefa.prioridade}</span>
            </div>
            <div class="info">
                <strong>Prazo: </strong>
                <span>${moment(tarefa.prazo).format('DD/MM/YYYY')}</span>
            </div>
            <div class="info">
                <strong>Responsaveis: </strong>
                <span>${tarefa.responsaveis}</span>
            </div>
        </div>
        `
        coluna.innerHTML += card;
    }
    )


}

function removerTask(){
    var index = cardList.findIndex(tarefa => tarefa.id == $idInput.value)
    cardList.splice(index, 1)
    criarCard()
    fecharModal()
}

function editarTarefa() {
    const task = {
        id: $idInput.value,
        titulo: $tituloInput.value,
        descricao: $descricaoInput.value,
        prioridade: $prioridadeInput.value,
        prazo: $prazoInput.value,
        status: $criarEmImput.value,
        responsaveis: $responsaveisInput.value
    }
    var index = cardList.findIndex(tarefa => tarefa.id == $idInput.value)
    cardList[index] = task
    criarCard()
    fecharModal()
}

function trocarColuna(idTarefa, idColuna) {
    if (idTarefa && idColuna) {
        cardList = cardList.map((tarefa) => {
            if (idTarefa != tarefa.id) return tarefa
            return {
                ...tarefa,
                status: idColuna,
            }
        })
    }
    criarCard()
}

function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("dadoPersonalizado", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}
function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const idTask = ev.dataTransfer.getData("dadoPersonalizado");//pedga o id da task
    const idColuna = ev.target.dataset.column

    trocarColuna(idTask,idColuna)
    //ev.target.appendChild(document.getElementById(data));
}

