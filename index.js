let blocks = document.querySelectorAll('.gameBlock > .block')
// stores blocks 
let generatedSequence = []
// stores blocks from playerSequence
let playerCreatedSequence = []


// iterates through an array of blocks pushes result into generated array
let getRandomBlock = () => {
    // randomly selecting a block from blocks array
    for (let i = 0; i < 10; i++) {
    generatedSequence.push(blocks[Math.floor(Math.random() * blocks.length)])
    blocks.forEach( (block)=>{
        
    })
}}




console.log(blocks)


    // shows background color when div is clicked
 let addActiveClass = () =>{
   blocks.forEach(element => {
    element.addEventListener('click', ()=>{
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
    blocks.forEach((element, index) => {
        element.addEventListener('click', () => {
            if(playerCreatedSequence.length = 1){
                playerCreatedSequence.shift()
            }
            playerCreatedSequence.push(element)
        })
    })
    return blocks
}
addClickEvent()

// let increaseSequence = () =>{
    
//     let i = 0
//     generatedSequence[i]
//         setInterval(() => {
//         if (i >= generatedSequence.length) {
//             generatedSequence[i++]
//             clearInterval
            
//         }

//     }, 1000);
// }
// increaseSequence()

// adds random block im intervals to an array 
increaseSequence = () => {
    getRandomBlock()
    let i= 0
    generatedSequence.forEach(element => {
        element.addEventListener('click', () => {
            if(generatedSequence[i]===playerCreatedSequence[0]) {
                element.classList.toggle('active')
                setTimeout(() => {
                    element.classList.toggle('active')
                }, 200);
                setInterval(() => {
                
                    
                    
                }, 1000);
            }
        })
    })
}

increaseSequence()


let gameLoop = () =>{
 
}

    




//gameLoop 
// computer function create 20+n random blocks, flash for each block, push to generated sequence array 
// player function event listener input, compare to generated sequence index, if pass +1 scorewin if lose gameover, computer function array ++ 


console.log(generatedSequence)
console.log(playerCreatedSequence)