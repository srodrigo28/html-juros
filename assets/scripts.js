const capitalInput = document.getElementById('value');
const taxaInput = document.getElementById('fee');
const tempoInput = document.getElementById('time');
const totalOutput = document.getElementById('total');
const monthlyIncomeOutput = document.getElementById('monthly-income');
const calculateButton = document.getElementById('btnCalcular');

function preencherMeses() {
    for (let mes = 12; mes <= 36; mes += 1) {
        const option = document.createElement('option');
        option.value = String(mes);
        option.textContent = String(mes);
        tempoInput.appendChild(option);
    }
}

function limparMoedaBr(valor) {
    if (!valor) return NaN;

    const valorNormalizado = valor
        .replace(/\./g, '')
        .replace(',', '.')
        .replace(/[^\d.-]/g, '');

    return Number(valorNormalizado);
}

function moeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function calcular() {
    const capital = limparMoedaBr(capitalInput.value);
    const taxaMensal = Number(taxaInput.value) / 100;
    const meses = Number(tempoInput.value);

    const entradaInvalida =
        !Number.isFinite(capital) ||
        capital <= 0 ||
        !Number.isFinite(taxaMensal) ||
        !Number.isFinite(meses) ||
        meses < 12 ||
        meses > 36;

    if (entradaInvalida) {
        totalOutput.textContent = 'R$ 0,00';
        monthlyIncomeOutput.textContent = 'R$ 0,00';
        return;
    }

    const totalFinal = capital * ((1 + taxaMensal) ** meses);
    const rendimentoMensalMedio = (totalFinal - capital) / meses;

    totalOutput.textContent = moeda(totalFinal);
    monthlyIncomeOutput.textContent = moeda(rendimentoMensalMedio);
}

preencherMeses();
calculateButton.addEventListener('click', calcular);
capitalInput.addEventListener('input', calcular);
taxaInput.addEventListener('change', calcular);
tempoInput.addEventListener('change', calcular);
