// grab blocks
let blocks = document.querySelectorAll('.block')
let start = document.querySelector('.start')
let score = document.querySelector('.score')

let sequence = []
let playerSequence = []

highlightClick = () => {
    blocks.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('active')
            setTimeout(() => {
                element.classList.toggle('active')
            }, 200)
            playerSequence.push(element)

        })
    })
}
highlightClick()


console.log(playerSequence)

let generateSequence = () => {
    for (let i = 0; i < 10; i++) {
        sequence.push(blocks[Math.floor(Math.random() * blocks.length)])
    }
}

// start game button, highlights initial block (sequence[0])
let startGame = () => {
    generateSequence()
    sequence[0].classList.toggle('active')
    setTimeout(() => {
        sequence[0].classList.toggle('active')
    }, 300)
}

// creates a round if comparison is correct
let check = () => {
   
}


startGame()
// runs through array and compares at each index after click
let gameloop = () => {
    let i = 0
    if (sequence[i] === playerSequence[i]) {
        i++
        score.innerText = i
        sequence[i].classList.toggle('active')
        setTimeout(() => {
            sequence[i].classList.toggle('active')
        }, 500)
    }
}
// gameloop()
// let interval = setInterval(gameloop, 1000)
// clearInterval(interval)




clearGame = () => {
    sequence = []
    generatedSequence = []
    score.innerText = 0
}

start.addEventListener('click', gameloop)

console.log(sequence)