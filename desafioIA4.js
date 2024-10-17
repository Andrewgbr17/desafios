function calcularJuros() {
    const valorDivida = parseFloat(document.getElementById('valorDivida').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
    const meses = parseInt(document.getElementById('meses').value);

    const montante = valorDivida * Math.pow((1 + taxaJuros), meses);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `O valor total da dívida após ${meses} meses será de R$ ${montante.toFixed(2)}`;

    // Altera o fundo gradiente com base no valor final (ajuste as cores e o cálculo conforme necessário)
    const valorFinal = montante;
    const corInicio = '#7f00ff';
    const corFim = '#e100ff';
    const gradiente = `linear-gradient(45deg, ${corInicio}, ${corFim} ${valorFinal / 1000}%)`;
    document.body.style.background = gradiente;
}