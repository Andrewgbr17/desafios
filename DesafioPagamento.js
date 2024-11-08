function calcular() {
    //Adicionar mais trabalhadores
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    const percentualImposto = 20; // Por exemplo, 20% de imposto
    const valorImposto = salarioBruto * (percentualImposto / 100);
    const salarioLiquido = salarioBruto - valorImposto;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Nome: ${nome}</p>
        <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Imposto (${percentualImposto}%): R$ ${valorImposto.toFixed(2)}</p>
        <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}
