const resultado1 = document.querySelector('.valor-gorjeta-pessoa')
const resultado2 = document.querySelector('.valor-total-pessoa')

const listaPorcentagens = document.querySelectorAll('.botao-porcentagem');
const botaoResete = document.querySelector('.botao-resete')

for (let contador = 0; contador < 5; contador++) {
    const porcentagem = listaPorcentagens[contador];
    const valorPorcentagem = parseInt(porcentagem.innerHTML.split('%')[0],10)

    porcentagem.onclick = function (){
        botaoResete.classList.add('resete-activo');
        for(let i=0; i < 5; i++){
            if(listaPorcentagens[i].classList.contains('botao-activo')){
                listaPorcentagens[i].classList.remove('botao-activo');
            }
        }
    porcentagem.classList.toggle('botao-activo');
    const valorConta = parseInt(document.querySelector('#valor-conta').value,10)
    const gorjetaTotal = (valorConta * valorPorcentagem) / 100;
    const numeroPessoas = parseInt(document.querySelector('#numero-pessoas').value,10);
        
    if(!!numeroPessoas && !!valorConta){   
    resultado1.innerHTML = '$' + (gorjetaTotal / numeroPessoas).toFixed(2)
    resultado2.innerHTML = '$' + ((gorjetaTotal + valorConta) / numeroPessoas).toFixed(2)
    } else {
        resultado1.innerHTML = '$' + '0.00';
        resultado2.innerHTML = '$' + '0.00';
    }

    }
}





const inputNumeroPessoas = document.querySelector('#numero-pessoas');
let numeroPessoas = ""

inputNumeroPessoas.addEventListener('keyup', function(event) {
    botaoResete.classList.add('resete-activo');
    numeroPessoas = parseInt(event.target.value, 10);

    const porcentagemSelecionada = !!document.querySelector('.botao-activo') ?
    parseInt(document.querySelector('.botao-activo').innerHTML.split('%')[0],10) :"";
    const inputCustom = document.querySelector('#porcentagem-customizada').valueAsNumber;
    const valorConta = parseInt(document.querySelector('#valor-conta').value,10);

    if(!!porcentagemSelecionada){
        const gorjetaTotal = (valorConta * porcentagemSelecionada) / 100;
        if(numeroPessoas === 0) {
            document.querySelector('#numero-pessoas').classList.add('mensagem-erro');
            document.querySelector('.erro').classList.remove('oculto')
            resultado1.innerHTML = '$' + '0.00';
            resultado2.innerHTML = '$' + '0.00';

        } else if (!!!numeroPessoas){
            resultado1.innerHTML = '$' + '0.00';
            resultado2.innerHTML = '$' + '0.00';
        } 
        else {
        document.querySelector('.erro').classList.add('oculto');
        document.querySelector('#numero-pessoas').classList.remove('mensagem-erro');

        resultado1.innerHTML = '$' + (gorjetaTotal / numeroPessoas).toFixed(2)
        resultado2.innerHTML = '$' + ((gorjetaTotal + valorConta) / numeroPessoas).toFixed(2)
        }
    } else if (!!inputCustom){
        const gorjetaTotal = (valorConta * inputCustom) / 100;
        if(numeroPessoas === 0) {
            document.querySelector('#numero-pessoas').classList.add('mensagem-erro');
            document.querySelector('.erro').classList.remove('oculto')
            resultado1.innerHTML = '$' + '0.00';
            resultado2.innerHTML = '$' + '0.00';

        } else if (!!!numeroPessoas){
            resultado1.innerHTML = '$' + '0.00';
            resultado2.innerHTML = '$' + '0.00';
        } 
        else {
        document.querySelector('.erro').classList.add('oculto');
        document.querySelector('#numero-pessoas').classList.remove('mensagem-erro');

        resultado1.innerHTML = '$' + (gorjetaTotal / numeroPessoas).toFixed(2)
        resultado2.innerHTML = '$' + ((gorjetaTotal + valorConta) / numeroPessoas).toFixed(2)
        }

    } else {
        resultado1.innerHTML = '$' + '0.00';
        resultado2.innerHTML = '$' + '0.00';
    }
})





const inputValorConta = document.querySelector('#valor-conta');
let valorConta = ""

inputValorConta.addEventListener('keyup', function(event) {
    botaoResete.classList.add('resete-activo');
    valorConta = parseInt(event.target.value, 10);

    const porcentagemSelecionada = !!document.querySelector('.botao-activo') ?
    parseInt(document.querySelector('.botao-activo').innerHTML.split('%')[0],10) : ""
    const numeroPessoas = parseInt(document.querySelector('#numero-pessoas').value,10);
    const inputCustom = document.querySelector('#porcentagem-customizada').valueAsNumber;

    if(!!numeroPessoas) {
        if(!!porcentagemSelecionada) {
        const gorjetaTotal = (valorConta * porcentagemSelecionada) / 100;
        
        resultado1.innerHTML = '$' + (gorjetaTotal / numeroPessoas).toFixed(2)
        resultado2.innerHTML = '$' + ((gorjetaTotal + valorConta) / numeroPessoas).toFixed(2)
        } else {
        
        const gorjetaTotalInput = (valorConta * inputCustom) / 100;
        
        resultado1.innerHTML = '$' + (gorjetaTotalInput / numeroPessoas).toFixed(2)
        resultado2.innerHTML = '$' + ((gorjetaTotalInput + valorConta) / numeroPessoas).toFixed(2)
        }
    } else {
        resultado1.innerHTML = '$' + '0.00';
        resultado2.innerHTML = '$' + '0.00';
    }
    
})





const botaoCustom = document.querySelector('#porcentagem-customizada');
let porcentagemCustom = ""


botaoCustom.onclick = function () {
    for(let contador = 0; contador < 5; contador++) {
        listaPorcentagens[contador].classList.remove('botao-activo')
    }
}
botaoCustom.addEventListener('keyup', function(event){
    botaoResete.classList.add('resete-activo');
    porcentagemCustom = event.target.valueAsNumber
    console.log(porcentagemCustom)
    const numeroPessoas = parseInt(document.querySelector('#numero-pessoas').value,10);
    const valorConta = parseInt(document.querySelector('#valor-conta').value,10);
    const gorjetaTotal = (valorConta * porcentagemCustom) / 100;

    if (!!numeroPessoas && !!valorConta){
    resultado1.innerHTML = '$' + (gorjetaTotal / numeroPessoas).toFixed(2)
    resultado2.innerHTML = '$' + ((gorjetaTotal + valorConta) / numeroPessoas).toFixed(2)
    } else {
        resultado1.innerHTML = '$' + '0.00';
        resultado2.innerHTML = '$' + '0.00';
    }
})


botaoResete.onclick = function () {
    location.reload ()
}

