let blocks = document.querySelectorAll('.gameBlock > .block')
let compArray = []
let playerArray = []


// iterates through an array of blocks pushes result into player array
let iterator = () => {
    let randomBlocks = blocks[Math.floor(Math.random() * blocks.length)]
    compArray.push(randomBlocks)
    return randomBlocks 
} 

let playerClicks = () => {
    blocks.forEach((element, index) => {
        element.addEventListener('click', ()=>{
            playerArray.push(element)
        })

    })
}
console.log(playerClicks())
console.log(compArray)
console.log(playerArray)


// let playerTurn = () => {
//     blocks.forEach(element => {
//        element.addEventListener('click', ()=>{
//         if(playerArray[0] === ) {


//         }

//     });
//     })

// }

