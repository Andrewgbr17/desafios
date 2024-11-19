let funcionarios = [];
 
function adicionarFuncionario() {
    const nome = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salario').value);

    // Cria um objeto para representar o funcionário
    const funcionario = {
        nome,
        salario
    };

    // Adiciona o funcionário ao array
    funcionarios.push(funcionario);

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('salario').value = '';

    // Atualiza a tabela
    atualizarTabela();
}

function atualizarTabela() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    funcionarios.forEach(funcionario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionario.nome}</td>
            <td>R$ ${funcionario.salario.toFixed(2)}</td>
            <td>R$ ${funcionario.salario.toFixed(2)}</td> `;
        tbody.appendChild(row);
    });
}
