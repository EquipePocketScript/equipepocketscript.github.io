const grid = document.querySelector('.grid-container');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')

const personagens = [
    'billie-eilish',
    'coraline',
    'ekko',
    'isabela-boscov',
    'jobu-tupaki',
    'lady-gaga',
    'lisa',
    'lux',
    'princess-peach',
    'tanjiro-kamado'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeiraCard = '';
let segundaCard = '';

const checarEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == (personagens.length)*2) {
        clearInterval(this.loop);
        setTimeout(() => {
            alert('Parabéns! Você venceu :D !!!!!');
        }, 300);
    }
}

const checarCards = () => {
    const primeiroPersonagem = primeiraCard.getAttribute('data-personagem');
    const segundoPersonagem = segundaCard.getAttribute('data-personagem');

    if(primeiroPersonagem == segundoPersonagem) {

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

    front.style.backgroundImage = `url('../images/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-personagem', personagem);

    return card;
}

const loadGame = () => {

    const duplicaPersonagens = [ ...personagens, ...personagens ]

    const embaralhaLista = duplicaPersonagens.sort( () => Math.random() - 0.5 );

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