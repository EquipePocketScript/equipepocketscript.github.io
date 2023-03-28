function trocaFoto () {
    if(document.getElementById("imagem").src == "minhaFoto.jpeg") {
        document.getElementById("imagem").src("meuGIF.gif");
    }
    else {
        document.getElementById("imagem").src("minhaFoto.jpeg");
    }
}
