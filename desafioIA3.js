const flags = document.querySelectorAll('.flag');
const largerImage = document.querySelector('.larger-image');

flags.forEach(flag => {
    flag.addEventListener('click', () => {
        largerImage.src = flag.src;
        largerImage.style.display = 'block';
    });
});

// Atualizar a data no rodapé
const date = new Date();
document.getElementById("data").textContent = date.toLocaleDateString();

image.addEventListener('click', () => {
    image.style.width = '400px'; // Aumenta o tamanho da imagem ao clicar
});
