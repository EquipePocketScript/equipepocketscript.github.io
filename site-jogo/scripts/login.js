const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')

/* função para validar o botão */
const validarInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('Jogador', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validarInput);
form.addEventListener('submit', handleSubmit);