// Obtém o elemento da imagem e do botão
const imagem = document.getElementById('imagem');
const botaoTrocarImagem = document.getElementById('trocarImagem');

// Define um array com as URLs das imagens que você deseja alternar
const imagens = ['../img/logo sem nome.png', '../img/icones/arrow.png'];

// Variável para rastrear o índice da imagem atual
let indiceImagemAtual = 0;

// Adicione um ouvinte de evento para o botão
botaoTrocarImagem.addEventListener('click', function() {
    // Altera a origem da imagem para a próxima imagem no array
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    imagem.src = imagens[indiceImagemAtual];
});
