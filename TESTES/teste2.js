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
    window.location.href = '../TelaLogada.html?storedName=' + encodeURIComponent(name);

    // Limpar mensagens de erro, se houver
    displayError("");

    // Evitar o envio do formulário tradicional
    return false;
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
