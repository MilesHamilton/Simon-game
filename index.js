let blocks = document.querySelectorAll('.gameBlock > .block')
// stores blocks 
let generatedSequence = []
// stores blocks from playerSequence
let playerCreatedSequence = []


// iterates through an array of blocks pushes result into generated array
let getRandomBlock = () => {
    // randomly selecting a block from blocks array
  return blocks[Math.floor(Math.random() * blocks.length)]
}

    // shows background color when div is selected
 let addActiveClass = () =>{
   blocks.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
        setTimeout(() => {
            element.classList.toggle('active')
        }, 200);
    })
       
   });
       console.log(blocks)
 }
 addActiveClass()



// player clicks block, block is pushed to new array
let addClickEvent = () => {
    blocks.forEach((element, index) => {
        element.addEventListener('click', () => {
            playerCreatedSequence.push(element)
        })
    })
    return blocks
}
addClickEvent()

let condition = () => {
    
}

// checks every item in an array 
// let incrementor = (array, delegate, delay) => {
//     let i = 0

//     function loop() {
//         // each loop, call passed in function
//         delegate(array[i]);

//         // increment, and if we're still here, call again
//         if(generatedSequence.length === playerCreatedSequence.length){
            
//         }
//         if (i++ < array.length - 1)
//             setTimeout(loop, delay); //recursive
//     }

//     // seed first call
//     setTimeout(loop, delay);
// }
// incrementor(generatedSequence, console.log(generatedSequence.push(getRandomBlock(blocks))), 2000)
  


console.log(generatedSequence)
console.log(playerCreatedSequence)