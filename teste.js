// funçao para abrir tela LOGIN #RENAN

var confirmacao = false;

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

function funcaoOriginal() {
  abrirPopup(); 
}

function funcaoAposConfirmacao() {
  abrirlogin();  
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


function executarFuncao() {
  if (confirmacao) {
    funcaoAposConfirmacao();
  } else {
    funcaoOriginal();
  }
}

function confirmar() {
  confirmacao = true;
  fecharPopup();
}


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
// ↓↓↓↓↓↓↓ REVISAR  *****  REVISAR ***** REVISAR ↓↓↓↓↓↓↓


var usuarios = [];

function carregarPlanilha() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    var reader = new FileReader();

    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        // Suponha que a primeira planilha seja a que contém os dados dos usuários
        var worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Converte os dados da planilha em um array de objetos
        usuarios = XLSX.utils.sheet_to_json(worksheet);

        console.log(usuarios); // Exibe os dados lidos da planilha
    };

    reader.readAsArrayBuffer(file);
}

function verificarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var credenciaisCorretas = false;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].senha === senha) {
            credenciaisCorretas = true;
            break;
        }
    }

    if (credenciaisCorretas) {
        document.getElementById('resultado').textContent = "Login bem-sucedido. Acesso permitido.";
    } else {
        document.getElementById('resultado').textContent = "Credenciais incorretas. Acesso negado.";
    }
}

// ↑↑↑↑↑↑↑ REVISAR  *****  REVISAR ***** REVISAR ↑↑↑↑↑↑↑
// #RENAN *** #RENAN *** #RENAN


 // Função para alterar o slide quando uma miniatura é clicada
 function changeSlide(slideNumber) {
  const slides = document.querySelectorAll('.slider li input');
  slides[slideNumber].checked = true;
}