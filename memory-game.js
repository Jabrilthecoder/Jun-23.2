  const cardArray = [
      {
          name: 'blank',
          img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png' ,
      },
      {
        name: 'cheeseburger',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png' ,
    },
    {
        name: 'fries',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png' ,
    },
    {
        name: 'pizza',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png' ,
    },
    {
        name: 'hotdog',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png' ,
    },
    {
        name: 'milkshake',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png' ,
    },
    {
        name: 'icecream',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/icecream.png' ,
    },
    {
        name: 'Blank2',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/white.png' ,
    }

  ]

  cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector(`#grid`)

function createBoard () {
    for (let i = 0; i < 10; i++) {
        document.createElement('img')
        cardArray.setAttribute('src', 'image/blank.png')
        cardArray.setAttribute("data-id", i)
        gridDisplay.appendChild(card)
    }
}
createBoard()