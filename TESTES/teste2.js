function openPopup() {
  var contentContainer = document.getElementById('popup-content');
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'TelaEntrar.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Adiciona um evento de clique a todos os botões com a classe "popup-button"
var buttons = document.querySelectorAll('.popup-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openPopup);
}
