let blocks = document.querySelectorAll('.gameBlock > .block')
// stores blocks 
let generatedSequence = []
// stores blocks from playerSequence
let playerCreatedSequence = []


// iterates through an array of blocks pushes result into generated array
let getRandomBlock = () => {
    // randomly selecting a block from blocks array
    for (let i = 0; i < 20; i++) {
    generatedSequence.push(blocks[Math.floor(Math.random() * blocks.length)])
    blocks.forEach( (block)=>{
        block.classList.toggle('active')
        
    })
}}
getRandomBlock()


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






// checks every item in an array 
// let incrementor = (array, delegate, delay) => {
//     let i = 0

//     function loop() {
//         // each loop, call passed in function
//         delegate(array[i]);

//         // increment, and if we're still here, call again
//         delegate(array[i])
            
//         if (i++ < array.length - 1)
//             setTimeout(loop, delay); //recursive
//     }

//     // seed first call
//     setTimeout(loop, delay);
// }
// incrementor(generatedSequence, function(obj) {console.log(obj)}, 2000)
  

let gameLoop = () => {
    let i = 0

    //termination 
    
        



    //base


    //recursion
      

    

}


//gameLoop 
// computer function create 20+n random blocks, flash for each block, push to generated sequence array 
// player function event listener input, compare to generated sequence index, if pass +1 scorewin if lose gameover, computer function array ++ 


console.log(generatedSequence)
console.log(playerCreatedSequence)