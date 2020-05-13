let blocks = document.querySelectorAll('.gameBlock > .block')
// stores blocks form iterator()
let generatedSequence = []
// stores blocks from playerClick()
let playerCreatedSequence = []


// iterates through an array of blocks pushes result into player array
let getRandomBlock = (blocks) => {
    // randomly selecting a block from blocks array
    return blocks[Math.floor(Math.random() * blocks.length)]
}
generatedSequence.push(getRandomBlock(blocks))

let addClickEvent = (element) => {
    element.addEventListener('click', ()=>{
        callAdding()
    })
}
console.log(addEventListener)

let callClickEvent = (blocks) => {
    blocks.forEach(block => {
        addEventListener(block)
    });
}

// player clicks block, block is pushed to new array, compared, game ends/game continues
// let playerClicks = () => {
//     blocks.forEach((element, index) => {
//         element.addEventListener('click', () => {
//             playerArray.push(element)
//             if (playerArray[index] === compArray[index]) {
//                 iterator()
//             }
//         })

//     })
//     return blocks
// }
// playerClicks()

// checks every item in an array 
let incrementor = (array, delegate, delay) => {
    let i = 0

    function loop() {
        // each loop, call passed in function
        delegate(array[i]);

        // increment, and if we're still here, call again
        if (i++ < array.length - 1)
            setTimeout(loop, delay); //recursive
    }

    // seed first call
    setTimeout(loop, delay);
}
//   incrementor(compArray, iterator(), 2000)


console.log(generatedSequence)
console.log(playerCreatedSequence)