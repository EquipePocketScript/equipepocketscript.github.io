const animeList = [
    {
      anime: "Attack on Titan",
      dados: {
          genre: ["action", "drama", "suspense"],
          popularity: 3738467,
          score: 8.54,
          type: "Série de Série de TV",
          classification: 18,
          year: 2013,
          episodes: "88 episódios",
          studios: "Wit Studios",
          sinopse: "A história de Ataque dos Titãs gira em torno de uma humanidade que vem sendo exterminada por titãs. Porém alguns seres humanos estão dispostos a mudar história e formar um exército de ataque aos seres assassinos. É assim que entra Eren, nosso protagonista, que após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa.",
          link: "images/shingeki-no-kyojin-season1.jpg"
        }
    },
    {
      anime: "Death Note",
      dados: {
          genre: ["supernatural", "suspense"],
          popularity: 3707205,
          score: 8.62,
          type: "Série de TV",
          classification: 18,
          year: 2006,
          episodes: "37 episódios",
          studios: "Madhouse",
          sinopse: "Light Yagami é um genial estudante entediado com a vida que leva. Mas tudo está prestes a mudar. Light encontra um misterioso caderno chamado Death Note e descobre que com ele é possível matar quem quiser. O rapaz então decide varrer a escória da sociedade do planeta. Dotado de grande senso de justiça, ele começa a usar o caderno maldito para eliminar criminosos do mundo inteiro e começa a ganhar notoriedade na internet e nos demais meios de comunicação.",
        link: "images/death-note.jpg"
    }
    },
    {
      anime: "Fullmetal Alchemist: Brotherhood",
      dados: {
          genre: ["action", "adventure", "drama", "fantasy"],
          popularity: 3171382,
          score: 9.1,
          type: "Série de TV",
          classification:16,
          year:2009,
          episodes:"64 episódios",
          studios: "Bones",
          sinopse: "Depois de perderem sua mãe, Alphonse e Edward Elric tentam trazê-la de volta usando uma técnica de alquimia proíbida. Contudo, o princípio básico da alquimia é a ‘troca equivalente’, e tentar ressucitar alguém custa muito alto. Ed perde sua perna, e Al perde seu corpo. Ed consegue selar a alma de Al dentro de uma grande armadura metálica, dando em troca seu braço. Anos depois, Ed (com dois membros de metal) e Al (ainda preso na armadura) deixam a sua cidade natal.Ed, que possui um talento nato para a alquimia, se torna um alquimista com certificado nacional, e logo passa a ser chamado de ‘full metal alchemist’. Mas o verdadeiro objetivo dos irmãos é encontrar a pedra filosofal, na esperança de recuperarem os seus corpos originais. Logo eles descobrem que essa mística pedra, que pode nem existir, é visada não só por eles, mas como muitas outras pessoas também.",
          link: "images/fullmetal-alchemist-brotherhood.jpg"
        }
    },
    {
      anime: "One Punch Man",
      dados: {
          genre: ["action", "comedy"],
          popularity: 3053695,
          score: 8.5,
          type: "Série de TV",
          classification: 16,
          year: 2015,
          episodes: "12 episódios",
          studios: "Madhouse",
          sinopse: "Saitama se tornou um herói por hobbie. Após três anos de um treinamento “especial”, ele se tornou tão forte que é praticamente invencível. Na verdade, ele é forte demais! Até mesmo o mais poderoso dos inimigos é derrotado em um soco só, mas, com uma vida sem desafios, ele sofre com o tédio e a depressão… Mesmo perdendo a sua paixão pelo heroísmo junto ao seu cabelo, ele ainda é confrontado por inimigos diariamente. Por quanto tempo ele ainda conseguirá seguir este caminho?",
          link: "images/one-punch-man.jpg"        
        }
    },
    {
      anime: "Sword Art Online",
      dados: {
          genre: ["action", "adventure", "fantasy", "romance"],
          popularity: 2948123,
          score: 7.2,
          type: "Série de TV",
          classification: 14,
          year: 2012,
          episodes: "25 episódios",
          studios: "A-1 Picture",
          sinopse: "Escapar é impossível até o jogo ser completado, um game over significa uma verdadeira morte. Sem saber a verdade da misteriosa nova geração do RPG, Sword Art Online, aproximadamente 10 mil jogadores logaram juntos, abrindo as cortinas para essa cruel batalha mortal. Jogando sozinho, o protagonista Kirito imediatamente aceitou a verdade desse RPG, e no mundo do jogo, em um castelo flutuante gigante chamado Aincrad, ele se distinguiu como um jogador solitário. Buscando completar o jogo alcançando o andar mais alto, Kirito arriscadamente continua sozinho. Por causa de um convite agressivo de uma guerreira e especialista em esgrima, Asuna, ele se juntou a ela. Esse encontro trouxe uma oportunidade para chamar pelo destinado Kirito.",
          link:"images/sword-art-online.jpg"
        }
    },
    {
      anime: "My Hero Academia",
      dados: {
          genre: ["action"],
          popularity: 2877907,
          score: 7.89,
          type: "Série de TV",
          classification: 14,
          year: 2016,
          episodes: "13 episódios",
          studios: "Bones",
          sinopse: "Por toda a sua vida, Izuku sonhou ser um herói — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.",
          link: "images/boku-no-hero-academia-season1.jpg"
        }
    },
    {
      anime: "Demon Slayer: Kimetsu no Yaiba",
      dados: {
          genre: ["action", "fantasy"],
          popularity: 2800619,
          score: 8.51,
          type: "Série de TV",
          classification: 16,
          year: 2019,
          episodes: "26 episódios",
          studios: "Ufotable",
          sinopse: "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.",
          link: "images/kimestu-no-yaiba.jpg"
        }
    },
    {
      anime: "Naruto",
      dados: {
          genre: ["action", "adventure", "fantasy", "romance"],
          popularity: 2712968,
          score: 7.98,
          type: "Série de TV",
          classification:14,
          year:2002,
          episodes:"220 episódios",
          studios:"Pierrot",
          sinopse: "Doze anos antes do início da série, um monstro conhecido como Raposa de Nove Caudas (Kyuubi) atacou a aldeia de Konoha, destruindo grande parte da aldeia e tirando muitas vidas. O líder da aldeia, o quarto Hokage, sacrificou a sua vida para selá-la em um recém-nascido, Naruto Uzumaki. Órfão por causa do ataque, Naruto sempre é evitado pelos moradores, que por medo e raiva, veem-no como o próprio Nove Caudas. Com sua sede por reconhecimento, Naruto jura que um dia se tornará o maior Hokage da aldeia.",
          link: "images/naruto.jpg"
        }
    },
    {
      anime: "Tokyo Ghoul",
      dados: {
          genre: ["action", "fantasy", "horror"],
          popularity: 2695500,
          score: 7.79,
          type: "Série de TV",
          classification:18,
          year:2012,
          episodes:"12 episódios",
          studios:"Pierrot",
          sinopse: "Estranhos assassinatos começam a acontecer em Tokyo. Devido a evidência líquida nos casos, a polícia concluiu que os ataques são resultados de uma criatura que se alimenta de outros seres, um “ghoul” do tipo “eater”. Dois amigos de faculdade, Kaneki e Hide, criam a teoria de que os ghouls estão imitando os humanos, por isso nunca são vistos ou capturados. Eles nem imaginam que essa teoria pode ser verdade e a coisa sairá do controle, pois Kaneki acaba se envolvendo, sem saber, com uma dessas criaturas, que ao atacar o garoto acaba morrendo acidentalmente, mas o deixa seriamente ferido e a ponto de morrer. A única salvação? Um transplante envolvendo a própria criatura, mas que poderá trazer consequências terríveis para Kaneki. O que acontecerá a partir de agora?",
          link: "images/tokyo-ghoul.jpg"
        }
    },
    {
      anime: "Hunter x Hunter (2011)",
      dados: {
          genre: ["action", "adventure", "fantasy"],
          popularity: 2651528,
          score: 9.04,
          type: "Série de TV",
          classification:14,
          year:2011,
          episodes:"148 episódios",
          studios:"Madhouse",
          sinopse: "Gon Freecss, um garoto de doze anos, um dia descobre que seu pai, que supostamente estava morto, estava vivo e bem. Seu Pai, Ging, é um Hunter, um membro de elite da sociedade com uma licença para ir a qualquer lugar ou fazer qualquer coisa. Gon, determinado a seguir os passos de seu pai, decide fazer o exame para Hunter, e um dia encontrar seu pai para provar a si mesmo como um caçador em seu próprio direito. Mas, no caminho, ele descobre que existe muito mais para se tornar um caçador, e os desafios que ele enfrentará são considerados os mais difíceis do mundo.",
          link: "images/hunter-x-hunter.jpg"
        }
    },
    {
      anime: "Your Name.",
      dados: {
          genre: ["drama", "supernatural"],
          popularity: 2592651,
          score: 8.85,
          type: "Filmes",
          classification:14,
          year:2016,
          episodes:"1h 46min",
          studios:"CoMix Wave Films",
          sinopse: "Mitsuha é uma estudante que vive em uma pequena cidade nas montanhas. Apesar de sua vida tranquila, ela sempre se sentiu atraída pelo cotidiano das grandes cidades. Um dia, Mitsuha tem um sonho estranho em que se torna um garoto. No sonho, ela acorda em um quarto que não é dela, tem amigos que nunca viu e passeia por Tóquio. E assim aproveita ao máximo seu dia na cidade grande, onde ela adoraria viver.",
          link: "images/kimi-no-na-wa.jpg"
        }
    },
    {
      anime: "Attack on Titan Season 2",
      dados: {
          genre: ["action", "drama", "suspense"],
          popularity: 2562103,
          score: 8.5,
          type: "Série de TV",
          classification: 18,
          year:2017,
          episodes:"12 episódios",
          studios:"Wit House",
          sinopse:"A história de Ataque dos Titãs gira em torno de uma humanidade que vem sendo exterminada por titãs. Porém alguns seres humanos estão dispostos a mudar história e formar um exército de ataque aos seres assassinos. É assim que entra Eren, nosso protagonista, que após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa",
          link: "images/shingeki-no-kyojin-season2.jpg"
      }
    },
    {
      anime: "Steins;Gate",
      dados: {
          genre: ["drama", "sci-fi", "suspense"],
          popularity: 2436561,
          score: 9.07,
          type: "Série de TV",
          classification:16,
          year:2011,
          episodes:"24 episódios",
          studios:"White Fox",
          sinopse: "Steins;Gate se passa no Verão de 2010, aproximadamente um ano após os acontecimentos que tiveram lugar em Chaos;Head, em Akihabara. Steins;Gate é sobre um grupo de amigos que personalizaram seu microondas num dispositivo que pode enviar mensagens de texto para o passado. Como eles realizam experiências diferentes, uma organização chamada Sern que vem a fazer sua própria pesquisa sobre viagem no tempo descobre sobre o grupo e agora os personagens têm de encontrar uma maneira de não serem capturados.",
          link: "images/steins-gate.jpg"
      }
    },
    {
      anime: "My Hero Academia Season 2",
      dados: {
          genre: ["action"],
          popularity: 2407160,
          score: 8.11,
          type: "Série de TV",
          classification: 14,
          year:2017,
          episodes:"12 episódios",
          studios:"Bones",
          sinopse:"Por toda a sua vida, Izuku sonhou ser um herói — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.",
          link: "images/boku-no-hero-academia-season2.jpg"
      }
    },
    {
      anime: "Naruto Shippuden",
      dados: {
          genre: ["action", "adventure", "fantasy"],
          popularity: 2344977,
          score: 8.26,
          type: "Série de TV",
          classification:14,
          year:2007,
          episodes:"500 episódios",
          studios:"Pierrot",
          sinopse:"Naruto Shippuuden ocorre 2 anos e meio após Naruto ter ficado para treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos shinobi’s o superaram na classificação, e ele caiu para trás. No entanto, com apenas 6 meses para resgatar Sasuke, Naruto tem de enfrentar inimigos ainda mais perigosos. O plano da Akatsuki se revela lentamente e os perigos surgem mais do que nunca!",
          link: "images/naruto-shippuden.jpg"
      }
    },
    {
      anime: "No Game, No Life",
      dados: {
          genre: ["comedy", "fantasy", "ecchi"],
          popularity: 2302935,
          score: 8.08,
          type: "Série de TV",
          classification:14,
          year:2014,
          episodes:"12 episódios",
          studios:"Madhouse",
          sinopse:"A história gira em torno do garoto Sora e da garota Shiro, dois irmãos que carregam a reputação de serem NEETs brilhantes (ou seja, dois garotos que não estudam, não trabalham, não fazem nada da vida, só ficam na frente do computador). Os dois hikikomoris são gamers conhecidos por toda a internet pelos seus feitos brilhantes, enquanto encaram a vida real apenas como um jogo chato, defeituoso… Bem, um dia eles são “convidados” por um garoto chamado de Deus para uma espécie de mundo alternativo onde tudo é decidido na base dos jogos: aqueles que vencem recebem a propriedade de tudo e com isso a humanidade estará livre de guerras, mas próxima do colapso. Agora resta saber se Sora e Shiro serão capazes de ”vencer” esse jogo também para evitar que o mundo acabe. O desafio está aceito.",
          link: "images/no-game-no-life.jpg"
      }
    },
    {
      anime: "Jujutsu Kaisen",
      dados: {
        genre: ["action", "fantasy"],
        popularity: 2245997,
        score: 8.64,
        type: "Série de TV",
   classification:16,
	   year:2020,
	   episodes:"24 episódios",
         studios:"Mappa",
         sinopse:"Jujutsu Kaisen Yuji é um gênio do atletismo, mas não tem interesse algum em ficar correndo em círculos. Ele é feliz como membro no Clube de Estudo de Fenômenos Psíquicos. Apesar de estar no clube apenas por diversão, tudo fica sério quando um espírito de verdade aparece na escola! A vida está prestes a se tornar muito interessante na Escola Sugisawa.",
         link: "images/jujustu-kaisen.jpg"
      }
    },
    {
      anime: "Attack on Titan Season 3",
      dados: {
        genre: ["action", "drama"],
        popularity: 2207624,
        score: 8.62,
        type: "Série de TV",
   	  classification:18,
	  year:2018,
	  episodes:"12 episódios",
        studios: "Wit Studios",
        sinopse:"A história de Ataque dos Titãs gira em torno de uma humanidade que vem sendo exterminada por titãs. Porém alguns seres humanos estão dispostos a mudar história e formar um exército de ataque aos seres assassinos. É assim que entra Eren, nosso protagonista, que após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa.",
        link: "images/shingeki-no-kyojin-season3.jpg"
      }
    },
    {
      anime: "A Silent Voice",
      dados: {
        genre: ["drama"],
        popularity: 2188997,
        score: 8.94,
        type: "Filmes",
 	   classification:14,
	   year:2016,
	   episodes:"2h 10min",
         studios:"Kyoto Animation",
         sinopse:"As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.",
         link: "images/a-silent-voice.jpg"
      }
    },
    {
      anime: "One Piece",
      dados: {
        genre: ["action", "adventure", "fantasy"],
        popularity: 2164293,
        score: 8.69,
        type: "Série de TV",
        classification:14,
        year:1999,
	  episodes:"+900 episódios",
         studios:"Toei Animations",
         sinopse:"Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. “Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!”. Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis… Assim começou a Grande Era dos Piratas!",
         link: "images/one-piece.jpg"
      }
    },
    {
      anime: "Code Geass: Lelouch of the Rebellion",
      dados: {
        genre: ["action", "drama", "sci-fi"],
        popularity: 2148665,
        score: 8.7,
        type: "Série de TV",
        classification:16,
        year:2006,
        episodes:"25 episódios",
        studios:"Sunrise",
        sinopse:"A história ocorre a partir do ano de 2010. Na pífia introdução da série vemos Britania, um império colonialista, tomar conta do Japão por meio da força, usando mechas de nome Nightmare Frames, arma para o qual o Japão não estava preparado. Vencidos, os japoneses são designados “11”, uma nova área sob controle de Britania. Ao mesmo tempo, somos apresentados a Lelouch Lamperouge e Suzaku Kururugi, ainda duas crianças. O primeiro jura destruir Britania a qualquer custo.",
        link: "images/code-gass.jpg"
      }
    },
    {
      anime: "Toradora!",
      dados: {
        genre: ["drama", "romance"],
        popularity: 2118641,
        score: 8.08,
        type: "Série de TV",
 	   classification:14,
	    year:2008,
	    episodes:"25 episódios",
          studios:"JS Staff",
          sinopse:"Ryuuji Takasu é um jovem que vive com a vergonha de ser confundido por um delinquente por ter um olhar maligno herdado de seu pai mas, na verdade, ele é apenas um garoto educado com mania de limpeza. No primeiro dia de aula Ryuuji se encontra com a temida palmtop Taiga, uma garota baixinha e extremamente mau-humorada. Devido a uma confusão entre as bolsas na sala, Taiga coloca uma carta de amor por engano na bolsa de Ryuuji e, assim, ele descobre que ela está apaixonada pelo seu melhor amigo Yuusaku Kitamura. Da mesma forma, Taiga descobre que Ryuuji está apaixonado pela melhor amiga dela, Minori Kushieda. À medida que eles vão se conhecendo, eles viram amigos que ajudam um ao outro a alcançar seus objetivos que é o de declarar seu amor para seus respectivos melhores amigos.",
          link: "images/toradora.jpg"
      }
    },
    {
      anime: "Your Lie in April",
      dados: {
        genre: ["drama", "romance"],
        popularity: 2108629,
        score: 8.65,
        type: "Série de TV",
 	   classification:14,
	   year:2014,
	   episodes:"22 episódios",
         studios:"A-1 Picture",
         sinopse:"Your Lie in April Baseado no premiado mangá Shigatsu wa Kimi no Uso, de Naoshi Arakawa, a série é sobre um pianista prodígio que se torna incapaz de tocar após o trauma de perder sua amada mãe e professora. Com isso arrancado dele, a vida de Kousei Arima se torna monótona e sem brilho. Um dia, Kousei é apresentado a uma violinista chamada Kaori Miyazono. Apesar da péssima primeira impressão que Kaori causa, sua música encanta completamente o rapaz. Livre, poderosa e apaixonada, a performance audaciosa de Kaori traz de volta a Kousei a luz da vida. Reunidos pela música, poderão as sinceras notas do violino da garota fazer com que o rapaz volte a tocar piano?",
         link: "images/your-lie-in-april.jpg"
      }
    },
    {
      anime: "Attack on Titan Season 3 Part 2",
      dados: {
        genre: ["action", "drama"],
        popularity: 2098954,
        score: 9.06,
        type: "Série de TV",
  	  classification:16,
	  year:2019,
	  episodes:"10 episódios",
        studios:"Wit Studios",
        sinopse:"A história de Ataque dos Titãs gira em torno de uma humanidade que vem sendo exterminada por titãs. Porém alguns seres humanos estão dispostos a mudar história e formar um exército de ataque aos seres assassinos. É assim que entra Eren, nosso protagonista, que após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa.",
        link: "images/shingeki-no-kyojin-season3-part2.jpg"
      }
    },
    {
      anime: "Re:ZERO -Starting Life in Another World-",
      dados: {
        genre: ["drama", "fantasy", "suspense"],
        popularity: 2088480,
        score: 8.23,
        type: "Série de TV",
 	  classification:16,
	  year:2016,
	  episodes:"25 episódios",
        studios:"White Fox",
        sinopse:"When Subaru Natsuki leaves the convenience store, the last thing he expects is to be wrenched from his everyday life and dropped into a fantasy world. Things are not looking good for the bewildered teenager; however, not long after his arrival, he is attacked by some thugs. Armed with only a bag of groceries and a now useless cell phone, he is quickly beaten to a pulp. Fortunately, a mysterious beauty named Satella, in hot pursuit after the one who stole her insignia, happens upon Subaru and saves him. In order to thank the honest and kindhearted girl, Subaru offers to help in her search, and later that night, he even finds the whereabouts of that which she seeks. But unbeknownst to them, a much darker force stalks the pair from the shadows, and just minutes after locating the insignia, Subaru and Satella are brutally murdered.",
        link: "images/rezero.jpg"
      }
    },
    {
      anime: "My Hero Academia Season 3",
      dados: {
        genre: ["action"],
        popularity: 2082318,
        score: 8.04,
        type: "Série de TV",
 	   classification:14,
	    year:2018,
	    episodes:"25 episódios",
          studios:"Bones",
          sinopse:"Por toda a sua vida, Izuku sonhou ser um herói — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.",
          link: "images/boku-no-hero-academia-season3.jpg"
      }
    },
    {
      anime: "Noragami",
      dados: {
        genre: ["action", "fantasy"],
        popularity: 2076461,
        score: 7.95,
        type: "Série de TV",
        classification:14,
	    year:2014,
	    episodes:"12 episódios",
          studios:"Bones",
          sinopse:"A história começa por Yato, um deus menor cujo sonho é ter milhões de seguidores. Infelizmente, seu sonho está longe de se tornar realidade, visto que sequer tem um santuário dedicado ao seu nome e se encontra sem nenhum Instrumento Divino, depois que seu último se demitiu após 3 meses de parceria. Neste cenário, Yato se depara com Hiyori, uma garota que secretamente é fã de artes marciais. Em seu primeiro encontro com ela, Yato é “salvo” quando Hiyori impede que ele seja atingindo por um caminhão, mas ela é atingida em seu lugar. A partir desse momento, Hiyori se encontra entre dois mundos. O que acontecerá?",
          link: "images/noragami.jpg"
      }
    },
    {
      anime: "Angel Beats!",
      dados: {
        genre: ["drama", "supernatural"],
        popularity: 2008477,
        score: 8.06,
        type: "Série de TV",
        classification:18,
	    year:2010,
	    episodes:"13 episódios",
          studios:"P.A Works",
          sinopse:"Death is one of many mysteries that has left humanity in the dark since the dawn of time. However, the burning question of what happens to the soul after one dies is soon answered to 17-year-old Yuzuru Otonashi. Waking up with no previous memories in a dimension between life and death, he discovers the unsettling truth of the afterlife.",
          link: "images/angel-beats.jpg"
      }
    },
    {
      anime: "Akame ga Kill!",
      dados: {
        genre: ["action", "fantasy"],
        popularity: 1995006,
        score: 7.47,
        type: "Série de TV",
        classification:18,
	    year:2014,
	    episodes:"24 episódios",
          studios:"White Fox",
          sinopse:"A história gira em torno de Tatsumi, um guerreiro caipira que vai a capital para ingressar no exército, mas que por forças maiores, acaba se unindo há um grupo de assassinos, night raid, que busca trazer justiça as frutas podres na capital do império.",
          link: "images/akame-ga-kill.jpg"
      }
    },
    {
      anime: "ERASED",
      dados: {
        genre: ["mistery", "supernatural", "suspense"],
        popularity: 1990923,
        score: 8.31,
        type: "Série de TV",
        classification:16,
        year:2016,
	    episodes:"12 episódios",
          studios:"A-1 Pictures",
          sinopse:"O mangaká novato Satoru Fujinuma é atormentado pelo seu medo de se expressar. Entretanto, ele possui um talento sobrenatural de ser forçado a evitar mortes e catástrofes ao ser enviado de volta no tempo antes da ocorrência do acidente, se repetindo até que o acidente seja impedido. Um dia, ele se envolve em um acidente que ele mesmo é enquadrado como um assassino. Desesperado para salvar a vítima, ele volta no tempo só para encontrar a si mesmo como um aluno do primário, um mês antes de sua colega de classe Kayo Hinadzuki desaparecer.",
          link: "images/erased.jpg"
      }
    }
]

function atualizarGrafico() {
    const selectGenero = document.getElementById('genre-option');
    const selectedGenre = selectGenero.value;
  
    const selectOrdenacao = document.getElementById('score-option');
    const selectedOrdenacao = selectOrdenacao.value;
  
    let animesFiltrados = [];
    
    if (selectedGenre == 'todos') {
      animesFiltrados = animeList;
    } else {
      animesFiltrados = animeList.filter(anime => anime.dados.genre.includes(selectedGenre));
    }
    
    // Ordenar animes por popularidade ou pontuaction
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
  
    const selectOrdenacao = document.getElementById('score-option');
    const selectedOrdenacao = selectOrdenacao.value;
  
    if (selectedOrdenacao == 'popularity') {
      data = animesFiltrados.map(anime => anime.dados.popularity);
    } else if (selectedOrdenacao == 'score') {
      data = animesFiltrados.map(anime => anime.dados.score);
    }
  
    const ctx = document.getElementById('myChart').getContext('2d');
  
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
          backgroundColor: 'rgba(70, 0, 239, 0.2)',
          borderColor: 'rgba(70, 0, 239, 1)',
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
    let nomeAnime = anime.anime;
    let yearAnime = anime.dados.year;
    let generoAnime = anime.dados.genre;
    let studioAnime = anime.dados.studios;
    let classificationAnime = anime.dados.classification;
    let durationAnime = anime.dados.episodes;
    let urlImg = anime.dados.link;
    let sinopseAnime = anime.dados.sinopse;
    
    const animeTitle = document.getElementById('title-anime');
    animeTitle.innerHTML = nomeAnime;

    const animeImage = document.getElementById('anime-image');
    animeImage.style.backgroundImage = `url(${urlImg})`;

    const animeClassification = document.getElementById('classification-anime');
    const divClassification = document.getElementById('anime-classification');
    animeClassification.innerHTML = classificationAnime;
    if (classificationAnime == 14) {
        divClassification.style.backgroundColor = '#FF8C00';
    }
    else if (classificationAnime == 16) {
        divClassification.style.backgroundColor = '#FF0000';
    } else if (classificationAnime == 18) {
        divClassification.style.backgroundColor = '#000000';
    }

    const animeYear = document.getElementById('year-anime');
    animeYear.innerHTML = yearAnime;

    const animeGenero = document.getElementById('genre-anime');
    animeGenero.innerHTML = generoAnime;

    const animeStudio = document.getElementById('studio-anime');
    animeStudio.innerHTML = studioAnime;

    const animeDuration = document.getElementById('duration-anime');
    animeDuration.innerHTML = durationAnime;

    const animeSinopse = document.getElementById('sinopse-anime');
    animeSinopse.innerHTML = sinopseAnime;
}  

