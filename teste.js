// funçao para abrir tela LOGIN #RENAN

function abrirPopup() {
    var background = document.getElementById("background");
    var popup = document.getElementById("popup");
    var conteudoPopup = document.getElementById("conteudoPopup");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "TelaEntrar.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            conteudoPopup.innerHTML = xhr.responseText;
            background.style.display = "flex";
        }
    };
    xhr.send();
}

function abrirlogin() {
    var background = document.getElementById("background");
    var popup = document.getElementById("popup");
    var conteudoPopup = document.getElementById("conteudoPopup");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "TelaPerfil.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            conteudoPopup.innerHTML = xhr.responseText;
            background.style.display = "flex";
        }
    };
    xhr.send();
}

function abrirContato() {
    var background = document.getElementById("background");
    var popup = document.getElementById("popup");
    var conteudoPopup = document.getElementById("conteudoPopup");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "TelaContato.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            conteudoPopup.innerHTML = xhr.responseText;
            background.style.display = "flex";
        }
    };
    xhr.send();
}

// Adicionar um ouvinte de evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Selecionar o formulário
    var form = document.getElementById('myForm');

    // Adicionar um ouvinte de evento submit ao formulário
    form.addEventListener('submit', function (event) {
        // Executar a função confirmar
        confirmar();

        // Aqui você pode adicionar outras lógicas relacionadas ao envio do formulário

        // Impedir o envio do formulário tradicional
        event.preventDefault();
    });
});


// FIM da funçao para abrir tela LOGIN #RENAN

// funçao para fechar tela Cadastro #RENAN

function fecharPopup() {
    var background = document.getElementById("background");
    background.style.display = "none";
}

// FIM da funçao para fechar tela Cadastro #RENAN

// funçao para mostrar senha #RENAN

function mostrarOcultarSenha() {
    var senhaInput = document.getElementById("senha");
    var mostrarSenhaButton = document.getElementById("mostrarSenha");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

// FIM da funçao para mostrar senha #RENAN

// funçao para abrir tela Cadastro #RENAN

function abrirTelaCadastro() {
    var modalCadastro = document.getElementById('modalCadastro');
    var modalContentCadastro = document.getElementById('modalContentCadastro');

    // Use XMLHttpRequest ou Fetch para carregar o conteúdo de TelaCadastro.html
    fetch('TelaCadastro.html')
        .then(response => response.text())
        .then(data => {
            // Insira o conteúdo carregado no modal do TelaCadastro
            modalContentCadastro.innerHTML = data;
            modalCadastro.style.display = 'block';
        });
}

// FIM da funçao para abrir tela Cadastro #RENAN

// funçao para voltar para tela LOGIN #RENAN

function fecharTelaCadastro() {
    var modalCadastro = document.getElementById('modalCadastro');
    modalCadastro.style.display = 'none';
}

// FIM da funçao para voltar para tela LOGIN #RENAN



// #RENAN *** #RENAN *** #RENAN

// #RENAN *** #RENAN *** #RENAN


// Função para alterar o slide quando uma miniatura é clicada
function changeSlide(slideNumber) {
    const slides = document.querySelectorAll('.slider li input');
    slides[slideNumber].checked = true;
}
// Obtém o elemento da imagem e do botão
const imagem = document.getElementById('imagem');
const botaoTrocarImagem = document.getElementById('trocarImagem');

// Define um array com as URLs das imagens que você deseja alternar
const imagens = ['../img/icones/favoritos.svg', '../img/icones/favoritos2.svg'];

// Variável para rastrear o índice da imagem atual
let indiceImagemAtual = 0;

// Adicione um ouvinte de evento para o botão
botaoTrocarImagem.addEventListener('click', function () {
    // Altera a origem da imagem para a próxima imagem no array
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    imagem.src = imagens[indiceImagemAtual];

    // Verifica se a imagem atual é a "favoritos2" e aumenta o tamanho
    if (indiceImagemAtual === 1) { // Índice 1 corresponde a "favoritos2"
        imagem.style.minWidth = '58px'; // Ajuste o tamanho conforme necessário
    } else {
        imagem.style.maxWidth = '100%'; // Volta para o tamanho original se for outra imagem
    }
});



// Função para inicializar o formulário
function initializeForm() {
    // Recuperar o nome armazenado no localStorage
    var nomeArmazenado = localStorage.getItem('storedName');

    // Exibir o nome na tela se existir
    if (nomeArmazenado) {
        document.getElementById('displayNome').innerText = "Nome armazenado: " + nomeArmazenado;
    }
}

// Função para validar o formulário
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validar nome sem caracteres especiais
    var nameRegex = /^[a-zA-Z ]*$/;
    if (!nameRegex.test(name)) {
        displayError("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    // Validar email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Email inválido. Insira um email válido.");
        return false;
    }

    // Validar senha
    if (password.length < 6) {
        displayError("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    // Confirmar senha
    if (password !== confirmPassword) {
        displayError("As senhas não coincidem. Por favor, revise.");
        return false;
    }

    // Redirecionar para a segunda página com o nome na URL
    window.location.href = 'TelaLogada.html?storedName=' + encodeURIComponent(name);

    // Limpar mensagens de erro, se houver
    displayError("");

    // Evitar o envio do formulário tradicional
    return false;
}






 // Função para validar o formulário
 function validateFormu() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validar nome sem caracteres especiais
    var nameRegex = /^[a-zA-Z ]*$/;
    if (!nameRegex.test(name)) {
        displayError("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    // Validar email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Email inválido. Insira um email válido.");
        return false;
    }

    // Limpar mensagens de erro, se houver
    displayError("");

    // Exibir o alerta após uma validação bem-sucedida
    var alerta = document.getElementById("alerta");
    alerta.style.display = "block";

    // Aguardar 3 segundos antes de permitir o envio do formulário
    setTimeout(function () {
        alerta.style.display = "none";
        // Permitir o envio do formulário tradicional
        document.getElementById("myForm").submit();
    }, 3000);

    // Evitar o envio do formulário tradicional imediatamente
    return false;
}


// Função para exibir mensagens de erro
function displayError(message) {
    var errorDiv = document.getElementById('error');
    errorDiv.innerHTML = "<p class='error'>" + message + "</p>";
}






// Função para exibir mensagens de erro
function displayError(message) {
    document.getElementById('error').innerHTML = "<p class='error'>" + message + "</p>";
}

// Função para inicializar a segunda página
function initializeSecondPage() {
    // Recuperar o nome armazenado na URL
    var urlParams = new URLSearchParams(window.location.search);
    var nomeArmazenado = urlParams.get('storedName');

    // Exibir o nome na tela se existir
    if (nomeArmazenado) {
        document.getElementById('displayNome').innerText = "Nome armazenado: " + nomeArmazenado;
    }
}

// Inicializar a segunda página ao carregar
window.onload = initializeSecondPage;
