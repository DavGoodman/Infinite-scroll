
const container = document.querySelector(".container")
let Url = ""

loadImages()
async function loadImages(){
    // let i = 0;
    
    for (let i = 0; i < 10; i++){
        await sleep(1100)

        Url =`https://random.imagecdn.app/500/500?${Math.random()}`
        const img = 
        `<div>
            <img src="${Url}" alt="">
        </div>`
        container.innerHTML += img
    }

    // while (i < numImages){
    //     let ranNum = randomNum(0, 1000)
    //     Url =`https://random.imagecdn.app/500/150?${ranNum}`
    //     const img = 
    //     `<div>
    //         <img src="${Url}" alt="">
    //     </div>`
    //     container.innerHTML += img
    //     i++
    // }
}


window.addEventListener("scroll", ()=> {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }