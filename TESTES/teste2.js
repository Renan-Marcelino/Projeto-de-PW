function abrirPopup() {
  var background = document.getElementById("background");
  var popup = document.getElementById("popup");
  var conteudoPopup = document.getElementById("conteudoPopup");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "testepopup.html", true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          conteudoPopup.innerHTML = xhr.responseText;
          background.style.display = "flex";
      }
  };
  xhr.send();
}
