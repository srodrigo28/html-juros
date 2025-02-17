
const capital = document.getElementById('value')
const taxa = document.getElementById('fee')
const tempo = document.getElementById('time')

function limparPontos(valor){
    let valorComPonto = valor.replace('.', '').replace(',', '.');
    return valorComPonto
}

function limparPontos2(valor){
    let valorComPonto = valor.replace('.', '').replace(',', '');
    return valorComPonto
}


document.getElementById('calculate').addEventListener('click', function(){

    const capitalT = limparPontos(capital.value)
    const taxaT = taxa.value
    const tempoT = limparPontos(tempo.value)

    console.log(tempoT)

   const total = capitalT * (1 + (taxaT / 100)) ** tempoT;

   document.getElementById('total').innerHTML = moeda(total)
})

function moeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

function limparLetras(valor){
    textoLimpo = texto.replace(/[a-zA-Z]/g, '')
}