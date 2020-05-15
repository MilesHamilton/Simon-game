// grab blocks
let blocks = document.querySelectorAll('.block')

let sequence = []
let playerSequence = []

blocks.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active')
        setTimeout(() => {
            element.classList.toggle('active')
        }, 200)
        playerSequence.push(element)

    })
})

createPlayerSequence = () => {
    playerSequence.push(blocks)
    if (playerSequence.length = 1) {
        playerSequence.shift()
    }
}
createPlayerSequence()

console.log(playerSequence)

let generateSequence = () => {
    for (let i = 0; i < 10; i++) {
        sequence.push(blocks[Math.floor(Math.random() * blocks.length)])
    }
}

let gameStart = () => {

}

console.log(sequence)


// simonSays = () => {
//      sequence[0].classList.toggle('active')
//     setTimeout(()=>{
//         sequence[0].classList.toggle('active')
//     }, 600)
//     return sequence[0]
// }





let playerStarts = () => {
    let i = 0
    generateSequence()
    sequence.forEach(element => {
        element.addEventListener('click', () => {
            setInterval(() => {
                if (sequence[i] === playerSequence[i]) {
                    i++
                    sequence[i].classList.toggle('active')
                    setTimeout(() => {
                        sequence[i].classList.toggle('active')
                    }, 600)
                } else {
                    console.log('gameover')
                }
            }, 2000)
        })
    });
}
playerStarts()