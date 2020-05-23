function botao(num){
    let salvo = document.calc.visor.value
    document.calc.visor.value = salvo + num
}

function limpar(){
    document.getElementById('visor').value = ''
}