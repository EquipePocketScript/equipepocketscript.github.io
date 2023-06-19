var fotoSabrina = "images/fotoSabrina.png";
var picrewSabrina = "images/lua.png";

var fotoSuzana = "images/fotoSuzana.png";
var picrewSuzana = "images/gato.jpg";

var fotoVitor = "images/fotoVitor.png";
var picrewVitor = "images/android.jpg";

var fotoYuri = "images/fotoYuri.png";
var picrewYuri = "images/mario.jpg";

function alternarSabrina () {
    document.getElementById("imagemSabrina").src = picrewSabrina;
    let guarda_fotoAnterior = fotoSabrina;
    fotoSabrina = picrewSabrina;
    picrewSabrina = guarda_fotoAnterior;
}

function alternarSuzana () {
    document.getElementById("imagemSuzana").src = picrewSuzana;
    let guarda_fotoAnterior = fotoSuzana;
    fotoSuzana = picrewSuzana;
    picrewSuzana = guarda_fotoAnterior;
}

function alternarVitor () {
    document.getElementById("imagemVitor").src = picrewVitor;
    let guarda_fotoAnterior = fotoVitor;
    fotoVitor = picrewVitor;
    picrewVitor = guarda_fotoAnterior;
}

function alternarYuri () {
    document.getElementById("imagemYuri").src = picrewYuri;
    let guarda_fotoAnterior = fotoYuri;
    fotoYuri = picrewYuri;
    picrewYuri = guarda_fotoAnterior;
}