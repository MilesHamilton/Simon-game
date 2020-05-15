let blocks = document.querySelectorAll('.gameBlock > .block')
// stores blocks 
let generatedSequence = []
// stores blocks from playerSequence
let playerCreatedSequence = []
//start button
let startButton = document.querySelector('.start')


// iterates through an array of blocks pushes result into generated array
let getRandomBlock = () => {
    // randomly selecting a block from blocks array
    for (let i = 0; i < 10; i++) {
        generatedSequence.push(blocks[Math.floor(Math.random() * blocks.length)])
    }
}

// shows background color when div is clicked
let addActiveClass = () => {
    blocks.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('active')
            setTimeout(() => {
                element.classList.toggle('active')
            }, 200);
        })

    });

}
addActiveClass()


// player clicks block, block is pushed to new array
let addClickEvent = () => {
    blocks.forEach((element) => {
        element.addEventListener('click', () => {

    return blocks
}}


// compares two arrays, increases the interval if true  
// increaseSequence = () => {
//     getRandomBlock()
//     let i = 0
//     generatedSequence.forEach(element => {
//         element.addEventListener('click', () => {
//             if (generatedSequence[i] === playerCreatedSequence[0]) {
//                 i++    
//             } else {
//                 console.log('game over')
//             }
//         })
//     })
// }
// increaseSequence()


addClickEvent()
let rounds = () => {

}


let startGame = () => {
}

let gameLoop = () => {

}


//gameLoop 
// computer function create 20+n random blocks, flash for each block, push to generated sequence array 
// player function event listener input, compare to generated sequence index, if pass +1 scorewin if lose gameover, computer function array ++ 


console.log(generatedSequence)
console.log(playerCreatedSequence)