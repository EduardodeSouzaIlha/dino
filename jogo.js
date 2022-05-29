const block = document.getElementById("player");

const cactu = document.getElementById("cactus");

const score = document.getElementById("score")


 
function jump(){
    if(block.classList != "jump"){
        block.classList.add("animate");
    
        setTimeout(function (){
        block.classList.remove("animate");
    }, 300);
    }
}
document.addEventListener("keydown", function (event){
    jump()
})

let position = setInterval(function(){
   score.innerText++;
    let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    let cactuleft = parseInt(window.getComputedStyle(cactu).getPropertyValue("left"));
    // console.log(cactuleft );    

    if(cactuleft < 70 && cactuleft > 40 && blocktop >= 120){
        console.log("colision");
        alert("game over sua pontuação foi: "+ score.innerText + "\n\njogar de novo?");
        location.reload();
    }
}, 10)