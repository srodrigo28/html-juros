
document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = value * (1 + fee) ** time;

    document.getElementById('total').innerHTML = (moeda(total))
})


function moeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}