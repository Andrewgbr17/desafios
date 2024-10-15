const form = document.getElementById('myForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar lógica para enviar os dados do formulário para um servidor, se necessário

    mensagem.style.display = 'block';
});