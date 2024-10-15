const fotos = document.querySelectorAll('.foto');

fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        // Remover a classe 'active' de todas as fotos
        fotos.forEach(foto => foto.classList.remove('active'));

        // Adicionar a classe 'active' à foto clicada
        foto.classList.add('active');
    });
});