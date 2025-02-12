export const MATCHES = [
  {
    id: "psg-city",
    homeTeam: {
      name: "PSG",
      formation: "4-3-3",
      color: "#21304D",
      flag: "psg.png",
    },
    awayTeam: {
      name: "Manchester City",
      formation: "4-2-3-1",
      color: "#43A1D5",
      flag: "city.png",
    },
    competition: "Ligue des champions",
    season: "2024/25",
    date: "7eme journée de poule",
    score: "4-2",
    players: {
      home: [
        { name: "Donnarumma", position: "G", picture: "Donnarumma.png" },
        { name: "Hakimi", position: "DD", picture: "Hakimi.png" },
        { name: "Marquinhos", position: "DCD", picture: "Marquinhos.png" },
        { name: "Pacho", position: "DCG", picture: "pacho.png" },
        { name: "Nuno Mendes", position: "DG", picture: "Mendes.png" },
        { name: "Joao Neves", position: "MCG", picture: "Neves.png" },
        { name: "Vitinha", position: "MD", picture: "Vitinha.png" },
        { name: "F. Ruiz", position: "MCD", picture: "Ruiz.png" },
        { name: "Barcola", position: "ALG", picture: "barcola.png" },
        { name: "Doue", position: "AT", picture: "doue.png" },
        { name: "Lee", position: "ALD", picture: "Lee.png" },
        { name: "Dembele", position: "SUB0" },
        { name: "Ramos", position: "SUB1" },
        { name: "Zaire-emery", position: "SUB2" },
        { name: "Hernandez", position: "SUB3" },
      ],
      away: [
        { name: "Ederson", position: "G", picture: "Ederson.png" },
        { name: "Matheus Nunes", position: "DD", picture: "Nunes.png" },
        { name: "Akanji", position: "DCD", picture: "Akanji.png" },
        { name: "R. Dias", position: "DCG", picture: "Dias.png" },
        { name: "Gvardiol", position: "DG", picture: "Gvardiol.png" },
        { name: "B. Silva", position: "MDG", picture: "Silva.png" },
        { name: "Kovacic", position: "MDD", picture: "Kovacic.png" },
        { name: "Foden", position: "MOD", picture: "foden.png" },
        { name: "Savinho", position: "MOG", picture: "Savinho.png" },
        { name: "De Bruyne", position: "MOC", picture: "de bruyne.png" },
        { name: "Haaland", position: "AT", picture: "haaland.png" },
        { name: "Grealish J", position: "SUB0" },
        { name: "Lewis R", position: "SUB1" },
        { name: "McAtee", position: "SUB2" },
        { name: "Gundogan", position: "SUB3" },
        { name: "Stone", position: "SUB4" },
      ],
    },
    short: "La remontada parisienne",
    description:
      "Le PSG était 26e au classement, virtuellement éliminé à deux journées de la fin. Manchester City occupait la 24e place, dernière qualificative, avec un point d'avance sur le PSG. Les deux équipes avaient besoin d'une victoire pour maintenir leurs espoirs européens.",
  },
  {
    id: "barcelona-real-madrid-manita",
    homeTeam: {
      name: "FC Barcelone",
      formation: "4-3-3",
      color: "#a50044",
      flag: "fc-barcelone.png",
    },
    awayTeam: {
      name: "Real Madrid",
      formation: "4-4-2",
      color: "#FFFFFF",
      flag: "real-madrid.png",
    },
    competition: "La Liga",
    season: "2010/11",
    short: "La Manita",
    description:
      "Cette 'Manita' (5-0) est entrée dans l'histoire du football comme l'un des Clasicos les plus spectaculaires, marquant la supériorité du Barça de Guardiola et de Messi sur le Real Madrid de Mourinho. Le jeu collectif et la maestria technique des Catalans ont littéralement fait voler en éclats le système défensif madrilène, démontrant une différence de niveau qui a marqué les esprits du monde entier. Cette rencontre est devenue un moment emblématique qui symbolise l'âge d'or du football barcelonais sous la direction de Pep Guardiola.",
    date: "13e journée",
    score: "5-0",
    players: {
      home: [
        { name: "Pedro", position: "AT", picture: "Pedro.png" },
        { name: "Messi", position: "ALG", picture: "Messi.png" },
        { name: "David Villa", position: "ALD", picture: "David Villa.png" },
        { name: "Sergio Busquets", position: "MCG", picture: "Busquets.png" },
        { name: "Andres Iniesta", position: "MCD", picture: "Iniesta.png" },
        { name: "Xavi", position: "MD", picture: "Xavi.png" },
        { name: "Dani Alves", position: "DG", picture: "Dani Alves.png" },
        { name: "E. Abidal", position: "DCG", picture: "Abidal.png" },
        { name: "Pique", position: "DCD", picture: "Pique.png" },
        { name: "Puyol", position: "DD", picture: "Puyol.png" },
        { name: "Victor Valdes", position: "G", picture: "Victor Valdes.png" },
      ],
      away: [
        {
          name: "Cristiano Ronaldo",
          position: "ATG",
          picture: "Ronaldo-r9.png",
        },
        { name: "K. Benzema", position: "ATD", picture: "Benzema.png" },
        { name: "Ozil", position: "MLG", picture: "Ozil.png" },
        { name: "Xabi Alonso", position: "MDG", picture: "xabi Alonso.png" },
        { name: "S. Khedira", position: "MDD", picture: "Khedira.png" },
        { name: "Di Maria", position: "MLD", picture: "Di-Maria.png" },
        { name: "Sergio Ramos", position: "DG", picture: "sergio-Ramos.png" },
        { name: "Ric Carvalho", position: "DCG", picture: "Carvalho.png" },
        { name: "Pepe", position: "DCD", picture: "Pepe.png" },
        { name: "Marcelo", position: "DD", picture: "Marcelo.png" },
        { name: "Casillas", position: "G", picture: "Casillas.png" },
      ],
    },
  },
  // {
  //   id: "argentine-france",
  //   awayTeam: { name: "France", formation: "4-1-2-3", color: "#21304D" },
  //   homeTeam: { name: "Argentine", formation: "4-1-2-3", color: "#43A1D5" },
  //   competition: "Coupe du monde 2022",
  //   season: "",
  //   description:
  //     "Ce match est entré dans l'histoire comme l'une des finales les plus spectaculaires, se terminant sur un score de 3-3 après prolongation, avec un triplé de 2 joueurs légendaires. L'Argentine a finalement remporté le titre aux tirs au but (4-2), décrochant ainsi sa troisième étoile.",
  //   date: "Finale",
  //   score: "3-3",
  //   players: {
  //     home: [
  //       { name: "Alvarez", position: "AT" },
  //       { name: "Di Maria", position: "ALG" },
  //       { name: "Messi", position: "ALD" },
  //       { name: "Mac Allister", position: "MCG" },
  //       { name: "De Paul", position: "MCD" },
  //       { name: "Fernandez", position: "MD" },
  //       { name: "Tagliafico", position: "DG" },
  //       { name: "Romero", position: "DCD" },
  //       { name: "Otamendi", position: "DCG" },
  //       { name: "Molina", position: "DD" },
  //       { name: "Martinez", position: "G" },
  //       { name: "Acuna", position: "SUB0" },
  //       { name: "Montiel", position: "SUB1" },
  //       { name: "Paredes", position: "SUB2" },
  //       { name: "Martinez L.", position: "SUB3" },
  //       { name: "Pezzella", position: "SUB4" },
  //       { name: "Dybala", position: "SUB5" },
  //     ],
  //     away: [
  //       { name: "Mbappe", position: "ALG" },
  //       { name: "Giroud", position: "AT" },
  //       { name: "Dembele", position: "ALD" },
  //       { name: "Griezmann", position: "MCD" },
  //       { name: "Rabiot", position: "MCG" },
  //       { name: "Tchouameni", position: "MD" },
  //       { name: "Hernandez", position: "DG" },
  //       { name: "Upamecano", position: "DCD" },
  //       { name: "Varane", position: "DCG" },
  //       { name: "Kounde", position: "DD" },
  //       { name: "Lloris", position: "G" },
  //       { name: "Thuram", position: "SUB0" },
  //       { name: "Kolo Muani", position: "SUB1" },
  //       { name: "Coman", position: "SUB2" },
  //       { name: "Camavinga", position: "SUB3" },
  //       { name: "Fofana", position: "SUB4" },
  //       { name: "Konate", position: "SUB5" },
  //       { name: "Disasi", position: "SUB6" },
  //     ],
  //   },
  // },
  {
    id: "barcelona-real-madrid-calma",
    homeTeam: {
      name: "FC Barcelone",
      formation: "4-3-3",
      color: "#a50044",
      flag: "fc-barcelone.png",
    },
    awayTeam: {
      name: "Real Madrid",
      formation: "4-4-2",
      color: "#FFFFFF",
      flag: "real-madrid.png",
    },
    competition: "Liga espagnole",
    season: "2011-12",
    short: "Calma, Calma",
    description:
      "le Barça de Guardiola affrontait pour la dernière fois le Real Madrid de Mourinho dans un match qui a tenu toutes ses promesses !",
    date: "35e journée",
    score: "1-2",
    players: {
      home: [
        { name: "Messi", position: "AT", picture: "Messi.png" },
        { name: "Iniesta", position: "ALG", picture: "Iniesta.png" },
        { name: "Tello", position: "ALD", picture: "cristian-tello.png" },
        { name: "Xavi", position: "MCG", picture: "Xavi.png" },
        { name: "Alcantara", position: "MCD", picture: "thiago-alcantara.png" },
        { name: "Sergio Busquets", position: "MD", picture: "Busquets.png" },
        { name: "Adriano", position: "DG", picture: "adriano-barca.png" },
        { name: "Puyol", position: "DCG", picture: "Puyol.png" },
        { name: "Mascherano", position: "DCD", picture: "mascherano.png" },
        { name: "Dani Alves", position: "DD", picture: "Dani Alves.png" },
        { name: "Victor Valdes", position: "G", picture: "Victor Valdes.png" },
      ],

      away: [
        {
          name: "Cristiano Ronaldo",
          position: "ATG",
          picture: "Ronaldo-r9.png",
        },
        { name: "K. Benzema", position: "ATD", picture: "Benzema.png" },
        { name: "Ozil", position: "MLG", picture: "Ozil.png" },
        { name: "Di Maria", position: "MLD", picture: "Di-Maria.png" },
        { name: "S. Khedira", position: "MDD", picture: "Khedira.png" },
        { name: "Xabi Alonso", position: "MDG", picture: "xabi Alonso.png" },
        { name: "Coentrao", position: "DG", picture: "coentrao.png" },
        { name: "Ser. Ramos", position: "DCG", picture: "sergio-Ramos.png" },
        { name: "Pepe", position: "DCD", picture: "Pepe.png" },
        { name: "Arbeloa", position: "DD", picture: "arbeloa.png" },
        { name: "Casillas", position: "G", picture: "Casillas.png" },
      ],
    },
  },
  // {
  //   id: 5,
  //   homeTeam: { name: "Bresil", formation: "4-2-3-1", color: "#FFDC02" },
  //   awayTeam: { name: "Allemagne", formation: "4-2-3-1", color: "#FFFFFF" },
  //   competition: "Coupe du monde 2014",
  //   season: "2014",
  //   short: "Humiliation à domicile",
  //   description:
  //     "le Barça de Guardiola affrontait pour la dernière fois le Real Madrid de Mourinho dans un match qui a tenu toutes ses promesses !",
  //   date: "Demi-finale",
  //   score: "1-7",
  //   players: {
  //     home: [
  //       { name: "Cesar", position: "G" },
  //       { name: "Maicon", position: "DD" },
  //       { name: "Dante", position: "DCD" },
  //       { name: "David luiz", position: "DCG" },
  //       { name: "Marcelo", position: "DG" },
  //       { name: "Fernandinho", position: "MDG" },
  //       { name: "Luis Gustavo", position: "MDD" },
  //       { name: "Hulk", position: "MOD" },
  //       { name: "Bernard", position: "MOG" },
  //       { name: "Oscar", position: "MOC" },
  //       { name: "Fred", position: "AT" },
  //       { name: "Ramires", position: "SUB0" },
  //       { name: "Paulinho", position: "SUB1" },
  //       { name: "Willian", position: "SUB2" },
  //     ],
  //     away: [
  //       { name: "Neuer", position: "G" },
  //       { name: "Lahm", position: "DD" },
  //       { name: "Boateng", position: "DCD" },
  //       { name: "Hummels", position: "DCG" },
  //       { name: "Howedes", position: "DG" },
  //       { name: "Schweinsteiger", position: "MDG" },
  //       { name: "Kedira", position: "MDD", picture: "Khedira.png" },
  //       { name: "Muller", position: "MOD" },
  //       { name: "Ozil", position: "MOG", picture: "Ozil.png" },
  //       { name: "Kroos", position: "MOC" },
  //       { name: "Klose", position: "AT" },
  //       { name: "Mertesacker P.", position: "SUB0" },
  //       { name: "Schurrle", position: "SUB1" },
  //       { name: "Draxler", position: "SUB2" },
  //     ],
  //   },
  // },
  {
    id: "acmilan-liverpool-2005",
    homeTeam: {
      name: "Milan AC",
      formation: "4-1-2-1-2",
      color: "#FFFFFF",
      flag: "milan-ac.png",
    },
    awayTeam: {
      name: "Liverpool",
      formation: "4-1-3-2",
      color: "#c8102E",
      flag: "liverpool.png",
    },
    competition: "ligue des champions",
    season: "2004-05",
    short: "Never done",
    description:
      "Finale mythique menés 0-3 à la mi-temps les reds nous ont offerts une 2eme mi-temps de folie pour revenir à 3 partout.",
    date: "Finale",
    score: "3-3",
    players: {
      home: [
        { name: "Crespo", position: "ATG", picture: "crespo.png" },
        { name: "Shevchenko", position: "ATD", picture: "Shevchenko.png" },
        { name: "Kaka", position: "MOC", picture: "kaka.png" },
        { name: "Gattuso", position: "MCD", picture: "Gattuso.png" },
        { name: "Seedorf", position: "MCG", picture: "Seedorf.png" },
        { name: "Pirlo", position: "MD", picture: "Pirlo.png" },
        { name: "Maldini", position: "DG", picture: "Maldini.png" },
        { name: "Nesta", position: "DCG", picture: "Nesta.png" },
        { name: "Stam", position: "DCD", picture: "Stam.png" },
        { name: "Cafu", position: "DD", picture: "Cafu.png" },
        { name: "Dida", position: "G", picture: "Dida.png" },
        { name: "Tomasson", position: "SUB0", picture: "Tomasson.png" },
        { name: "Serginho", position: "SUB1", picture: "Serginho.png" },
        { name: "Rui Costa", position: "SUB2", picture: "Rui-Costa.png" },
      ],

      away: [
        {
          name: "Kewell",
          position: "ATG",
          picture: "Kewell.png",
        },
        { name: "Baros", position: "ATD", picture: "milan-Baros.png" },
        { name: "Garcia", position: "MLD", picture: "Garcia.png" },
        { name: "Gerrard", position: "MOC", picture: "gerrard.png" },
        { name: "Riise", position: "MLG", picture: "Riise.png" },
        { name: "Xabi Alonso", position: "MD", picture: "xabi Alonso.png" },
        { name: "Traore", position: "DG", picture: "traore.png" },
        { name: "Hyypia", position: "DCG", picture: "Hyypia.png" },
        { name: "carragher", position: "DCD", picture: "carragher.png" },
        { name: "Finnan", position: "DD", picture: "finnan.png" },
        { name: "Dudek", position: "G", picture: "Dudek.png" },
        { name: "Smicer Vladimir", position: "SUB0", picture: "Smicer.png" },
        { name: "Hamann", position: "SUB1", picture: "Hamann.png" },
        {
          name: "Cisse Djibril",
          position: "SUB2",
          picture: "djibril-Cisse.png",
        },
      ],
    },
  },
  {
    id: "barca-psg-2017",
    homeTeam: {
      name: "FC Barcelone",
      formation: "3-3-1-3",
      color: "#a50044",
      flag: "fc-barcelone.png",
    },
    awayTeam: {
      name: "PSG",
      formation: "4-2-3-1",
      color: "#21304D",
      flag: "psg.png",
    },
    competition: "ligue des champions",
    season: "2016/17",
    short: "La remontada",
    description:
      "Le 8 mars 2017, le FC Barcelone réalise l'une des plus grandes remontées de l'histoire de la Ligue des Champions, battant le Paris Saint-Germain 6-1 au Camp Nou.",
    date: "1/8 finale",
    score: "6-1",
    players: {
      home: [
        { name: "Neymar", position: "ALG", picture: "neymar.png" },
        { name: "suarez", position: "AT", picture: "luis-suarez.png" },
        { name: "rafinha", position: "ALD", picture: "rafinha-2017.png" },
        { name: "Messi", position: "MOC", picture: "Messi.png" },
        { name: "Sergio Busquets", position: "MD", picture: "Busquets.png" },
        { name: "Andres Iniesta", position: "MDG", picture: "Iniesta.png" },
        { name: "rakitic", position: "MDD", picture: "rakitic.png" },
        { name: "Umtiti", position: "DCG3", picture: "umtiti.png" },
        { name: "Pique", position: "DC3", picture: "Pique.png" },
        { name: "Mascherano", position: "DCD3", picture: "mascherano.png" },
        { name: "Ter Stegen", position: "G", picture: "Ter-Stegen.png" },
        { name: "Turan A.", position: "SUB0", picture: "arda-turan.png" },
        { name: "Roberto S.", position: "SUB1", picture: "Sergio-Roberto.png" },
        { name: "Gomes A.", position: "SUB2", picture: "gomes-a.png" },
      ],

      away: [
        { name: "Cavani", position: "AT", picture: "cavani.png" },
        { name: "Lucas Moura", position: "MOD", picture: "Lucas-Moura.png" },
        { name: "Verratti", position: "MOC", picture: "verratti.png" },
        { name: "Draxler", position: "MOG", picture: "Draxler.png" },
        { name: "Matuidi", position: "MDG", picture: "matuidi.png" },
        { name: "Rabiot", position: "MDD", picture: "Rabiot.png" },
        { name: "Kurzawa", position: "DG", picture: "Kurzawa.png" },
        { name: "Thiago Silva", position: "DCG", picture: "Thiago-Silva.png" },
        { name: "Marquinhos", position: "DCD", picture: "Marquinhos.png" },
        { name: "Meunier", position: "DD", picture: "Meunier.png" },
        { name: "Trapp", position: "G", picture: "Trapp.png" },
        { name: "Di Maria", position: "SUB0", picture: "Di-Maria.png" },
        { name: "S. Aurier", position: "SUB1", picture: "aurier.png" },
        {
          name: "Krychowiak",
          position: "SUB2",
          picture: "Krychowiak.png",
        },
      ],
    },
  },
]
