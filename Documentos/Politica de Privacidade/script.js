var lista = document.getElementById("meu=texto");
var itens = lista.getElementsByTagName("li");

for (var i = 0; i < itens.length; i++) {
  itens[i].innerHTML = (i + 1) + ". " + itens[i].innerHTML;
}
