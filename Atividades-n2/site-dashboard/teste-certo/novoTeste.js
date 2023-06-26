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

function atualizarGrafico() {
  const selectGenero = document.getElementById('selectGenero');
  const selectedGenre = selectGenero.value;

  const selectOrdenacao = document.getElementById('selectOrdenacao');
  const selectedOrdenacao = selectOrdenacao.value;

  let animesFiltrados = [];
  
  if (selectedGenre == 'todos') {
    animesFiltrados = animeList;
  } else {
    animesFiltrados = animeList.filter(anime => anime.dados.genre.includes(selectedGenre));
  }
  
  // Ordenar animes por popularidade ou pontuação
  if (selectedOrdenacao == 'popularity') {
    animesFiltrados.sort((a, b) => b.dados.popularity - a.dados.popularity);
  } else if (selectedOrdenacao == 'score') {
    animesFiltrados.sort((a, b) => b.dados.score - a.dados.score);
  }
  
  // Chame a função para plotar o gráfico com os animes filtrados
  plotarGrafico(animesFiltrados);
}

let meuGrafico; // Variável global para armazenar a instância do gráfico

function plotarGrafico(animesFiltrados) {
  const labels = animesFiltrados.map(anime => anime.anime);
  let data;

  const selectOrdenacao = document.getElementById('selectOrdenacao');
  const selectedOrdenacao = selectOrdenacao.value;

  if (selectedOrdenacao == 'popularity') {
    data = animesFiltrados.map(anime => anime.dados.popularity);
  } else if (selectedOrdenacao == 'score') {
    data = animesFiltrados.map(anime => anime.dados.score);
  }

  const ctx = document.getElementById('meuGrafico').getContext('2d');

  if (meuGrafico) {
    meuGrafico.destroy();
  }

  meuGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: selectedOrdenacao == 'popularity' ? 'Popularidade' : 'Pontuação',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const animeSelecionado = animesFiltrados[index];
          // Chame a função que trata o clique na barra passando o anime selecionado
          handleBarClick(animeSelecionado);
        }
      }
    }
  });
}

atualizarGrafico();

function handleBarClick(anime) {
  // Lógica para tratar o clique na barra do gráfico
  console.log('Barra clicada:', anime.anime);
}