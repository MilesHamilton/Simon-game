let blocks = document.querySelectorAll('.gameBlock > .block')
let compArray = []
let playerArray = []


// iterates through an array of blocks pushes result into player array
let iterator = () => {
    let randomBlocks = blocks[Math.floor(Math.random() * blocks.length)]
    compArray.push(randomBlocks)
    return randomBlocks
} 
iterator()

let playerClicks = () => {
    blocks.forEach((element, index) => {
        element.addEventListener('click', ()=>{
            playerArray.push(element)
            if(playerArray[0] === compArray[0]){
                placeholderfunction
            }
        })

    }) 
    return blocks
}
playerClicks()
console.log(compArray)
console.log(playerArray)


