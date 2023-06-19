let corretas = [2,3,3,1,3,1,2,1,3,1];
let opcao= [];
let quantidade_corretas=0;

function resposta(num_pergunta, selecionada){
    opcao[num_pergunta] = selecionada.value;

    id="p" + num_pergunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor="white";
    labels[5].style.backgroundColor="white";
    labels[7].style.backgroundColor="white";

    selecionada.parentNode.style.backgroundColor = "#cec0fc";
}

function corrigir(){
    quantidade_corretas= 0;
    for(i=0; i<corretas.length;i++)
    {

            if(corretas[i]==opcao[i])
            {
                quantidade_corretas++;
            }
    }

    if(quantidade_corretas == 0)
    {
        document.getElementById("resultado").innerHTML= "Infelizmente, seu resultado é " + quantidade_corretas + " :(";
    }
    else
    {
        document.getElementById("resultado").innerHTML= "Parabéns! Você acertou " + quantidade_corretas + "!";
    }

}