const grid = document.querySelector('.grid-container');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')
const interfaceWinner = document.querySelector('#interface');
const headerContainer = document.querySelector('#header-container')

const personagens = [
    'adele',
    'anitta',
    'ariana-grande',
    'beyonce',
    'billie-eilish',
    'bruno-mars',
    'demi-lovato',
    'doja-cat',
    'dua-lipa',
    'halsey',
    'katy-perry',
    'lady-gaga',
    'lana-del-rey',
    'lisa',
    'michael-jackson',
    'miley-cyrus',
    'rihanna',
    'shakira',
    'sza',
    'taylor-swift'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeiraCard = '';
let segundaCard = '';

const apareceInterface = () => {

	const frase1 = `Parabéns, ${spanPlayer.innerHTML}! :D`;
	const frase2 = `Seu tempo de jogo foi de ${timer.innerHTML}s.`;
	interface.removeAttribute('hidden');
    interface.setAttribute('class', 'winner-interface')
	document.getElementById('name-player').innerHTML = frase1;
	document.getElementById('timer-pointer').innerHTML = frase2;
	grid.style.filter = "blur(5px)";
	headerContainer.style.filter = "blur(5px)";
}

const checarEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20) {
        clearInterval(this.loop);
        setTimeout(() => {
            apareceInterface();
        }, 300);
    }
}

const checarCards = () => {
    const primeiroPersonagem = primeiraCard.getAttribute('data-personagem');
    const segundoPersonagem = segundaCard.getAttribute('data-personagem');

    if(primeiroPersonagem == segundoPersonagem) {

        playAudio(primeiraCard);

        primeiraCard.firstChild.classList.add('disabled-card');
        segundaCard.firstChild.classList.add('disabled-card');

        primeiraCard = '';
        segundaCard = '';
        
        checarEndGame();

    } else {

        setTimeout(() => {

            primeiraCard.classList.remove('reveal-card');
            segundaCard.classList.remove('reveal-card');

            primeiraCard = '';
            segundaCard = '';

        }, 500);

    }

}

const playAudio = (elemento) => {
    const audio = elemento.querySelector('audio');
    audio.play();
}

const revealCard = ( { target } ) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(primeiraCard == '') {
        target.parentNode.classList.add('reveal-card');
        primeiraCard = target.parentNode;
    }

    else if (segundaCard == '') {
        target.parentNode.classList.add('reveal-card');
        segundaCard = target.parentNode;
    }

    checarCards();
    
}

const createCard = (personagem) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
    const audio = createElement('audio', `${personagem}`);

    front.style.backgroundImage = `url('../images/${personagem}.png')`;

    audio.src = `../audios/${personagem}.mp3`;

    card.appendChild(front);
    card.appendChild(back);
    card.appendChild(audio);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-personagem', personagem);

    return card;
}

const embaralhaCartas = (lista) => {
    const armazenaCartas = [];
    lista.sort(() => Math.random() - 0.5);
    for(let i = 0; i < 10; i++) {
        armazenaCartas.push(lista[i]);
    }
    const listaEmbaralhada = [...armazenaCartas, ...armazenaCartas];
    return listaEmbaralhada.sort(() => Math.random() - 0.5);
}

const loadGame = () => {

    const embaralhaLista = embaralhaCartas(personagens);
    
    embaralhaLista.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);

    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer + 1;
    }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('Jogador');
    startTimer();
    loadGame();
}