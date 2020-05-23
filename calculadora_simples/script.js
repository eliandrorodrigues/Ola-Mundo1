function botao(valor){
    document.calc.visor.value += valor
}

function limpar(){
    document.getElementById('visor').value = ''
}

function calcular(){
    let resultado
    resultado = document.getElementById('visor').value
    document.getElementById('visor').value = ''
    document.getElementById('visor').value = eval(resultado)
}