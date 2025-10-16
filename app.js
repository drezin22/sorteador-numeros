function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    // --- VALIDAÇÕES ---
    if (Number.isNaN(quantidade) || Number.isNaN(de) || Number.isNaN(ate)) {
        alert('Preencha todos os campos com números válidos.');
        return;
    }

    if (quantidade <= 0) {
        alert('A quantidade deve ser maior que zero.');
        return;
    }

    if (de > ate) {
        alert('O valor "Do número" não pode ser maior que "Até o número". Revise os valores.');
        return;
    }

    const totalPossiveis = ate - de + 1;
    if (quantidade > totalPossiveis) {
        alert(`Quantidade (${quantidade}) maior que o total de números possíveis no intervalo (${totalPossiveis}). Reduza a quantidade ou aumente o intervalo.`);
        return;
    }
    // --- FIM VALIDAÇÕES ---

    const sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    const botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
