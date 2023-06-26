const animeList = [
    {
        anime: "Attack on Titan",
        dados: {
            genre: ["action", "drama", "suspense"],
            popularity: 3738467,
            score: 8.54,
            type: "tv"}
    },
    {
        anime: "Death Note",
        dados: {
            genre: ["supernatural", "suspense"],
            popularity: 3707205,
            score: 8.62,
            type: "tv"}
    },
    {
        anime: "Fullmetal Alchemist: Brotherhood",
        dados: {
            genre: ["action", "adventure", "drama", "fantasy"],
            popularity: 3171382,
            score: 9.1,
            type: "tv"}
    },
    {
         anime: "One Punch Man",
         dados: {
            genre: ["action", "comedy"],
            popularity: 3053695,
            score: 8.5,
            type: "tv"}
    },
    {
         anime: "Sword Art Online",
         dados: {
            genre: ["action", "adventure", "fantasy", "romance"],
            popularity: 2948123,
            score: 7.2,
            type: "tv"
         }
    },
    {
         anime: "My Hero Academia",
         dados: {
            genre: ["action"],
            popularity: 2877907,
            score: 7.89,
            type: "tv"}
    },
    {
         anime: "Demon Slayer: Kimetsu no Yaiba",
         dados: {
            genre: ["action", "fantasy"],
            popularity: 2800619,
            score: 8.51,
            type: "tv"}
    },
    {
         anime: "Naruto",
         dados: {
            genre: ["action", "adventure", "fantasy", "romance"],
            popularity: 2712968,
            score: 7.98,
            type: "tv"}
    },
    {
         anime: "Tokyo Ghoul",
         dados: {
            genre: ["action", "fantasy", "horror"],
            popularity: 2695500,
            score: 7.79,
            type: "tv"}
    },
    {
         anime: "Hunter x Hunter (2011)",
         dados: {
            genre: ["action", "adventure", "fantasy"],
            popularity: 2651528,
            score: 9.04,
            type: "tv"}
        }
]

let listaM = animeList;

const pega_animesGenero = (genero) => {
    const animesGenero = [];

    for (let i = 0; i < animeList.animes.length; i++) {
        for (let j = 0; j < animeList.animes[i].genre.length; j++) {
            if (animeList.animes[i].genre[j] == genero) {
                animesGenero.push(animeList.animes[i]);
            }
        }
    }

    return animesGenero;
}

/* const genre = 'action';

console.log(pega_animesGenero(genre)); */

/* const novaLista = animeList;
console.log(novaLista); */

const data = {
    datasets: [{
        label: 'Popularidade',
        data: listaM,
        backgroundColor: 'rgba(70, 0, 239, 0.65)',
        borderColor: 'rgba(70, 0, 239, 1)',
        borderWidth: 1.5,
        parsing: {
            xAxisKey: 'anime',
            yAxisKey: 'dados.popularity'
        }
    }]
};

const conf = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const myChart = new Chart(document.getElementById('myChart'), conf);
const pointType = document.getElementById('point-type');

const updateClassification = (option) => {
    const label = pointType.options[pointType.selectedIndex].text;
    myChart.data.datasets[0].label = label;
    myChart.data.datasets[0].parsing.yAxisKey = `dados.${option.value}`;
    myChart.update();
}

const sepra_listaGenero = (genero) => {
    const novaLista = [];
    animeList.forEach((elemento) => {
        elemento.dados.genre.forEach((genre) => {
            if (genre == genero) {
                novaLista.push(elemento);
            }
        })
    });
    return novaLista;
}

const genreSelect = document.getElementById('genre-select');

const genreAll = () => {
    const typeDate = pointType.options[pointType.selectedIndex].value;
    listaM = sepra_listaGenero(genreSelect.options[genreSelect.selectedIndex].value);
    const dados = Object.keys(listaM[0]);
    myChart.data = listaM;
    myChart.data.parsing.xAxisKey = dados[0];
    myChart.data.parsing.yAxisKey = `${dados[1]}.${typeDate}`;
    myChart.update();
}
/*
const updateGenre = (genero) => {
    console.log(genero.value);
    if (genero.value == 'all') {
        genreAll();
    }
    else {
        const listaGenero = sepra_listaGenero(genero.value);
        const nomes = [];
        const valores = [];
        listaGenero.forEach((names) => {
            nomes.push(names.anime);
        });
        listaGenero.forEach((names) => {
            valores.push(names.dados);
        });
        console.log(nomes);
        console.log(valores);
        myChart.data = listaGenero;
        myChart.data.datasets[0].parsing.xAxisKey = 'nomes';
        myChart.data.datasets[0].parsing.yAxisKey = 'valores.popularity';
        myChart.update();
    }
}

for (let i = 0; i < animeList.length; i++) {
    for (let j = 0; j < animeList[i].dados.genre.length; j++) {
        if (animeList[i].dados.genre[j] == 'action') {
            console.log('este loop eh verdade!');
            break;
        }
    }
} */