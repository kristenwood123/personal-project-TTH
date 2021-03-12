const games = [
  {
    id: 1,
    title: "Galaga",
    img:
      "https://www.mediamatic.net/image/2016/12/13/undefined-571960019.jpg%28mediaclass-full-width.c3083fedae46a95f1139ff9d5833b1b6b8e20a69%29.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "Pacman",
    img:
      "./images/Pacman.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    title: "Qbert",
    img:
      "./images/Qbert.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('game-img')
const title = document.getElementById('title')
const text = document.getElementById('text')

const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')

let currentGame = 0;

window.addEventListener('DOmContentLoaded', function() {
  showGame()
})

function showGame() {
  const game = games[currentGame]
  img.src = game.img;

  title.textContent = game.title
  text.textContent = game.text
}

next.addEventListener('click', () => {
  currentGame++;
  if(currentGame > games.length - 1) {
    currentGame = 0
  }
  showGame(currentGame)
})

prev.addEventListener('click', () => {
  currentGame--;
  if(currentGame < 0) {
    currentGame = games.length - 1
  }
  showGame(currentGame)
}) 