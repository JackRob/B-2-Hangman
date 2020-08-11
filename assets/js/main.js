let word = document.getElementById("word")
let btns = document.querySelectorAll("#btnLetter")
let guessWord = "" // Le mot à trouver
let count = 6; // Le nombre de chance 


//canvas stuff
let head = document.getElementById("headMan")
let body = document.getElementById("bodyMan")
let armL = document.getElementById("armLMan")
let armR = document.getElementById("armRMan")
let legR = document.getElementById("legRMan")
let legL = document.getElementById("legLMan")


let c = document.getElementById("canvasArea")
let ctx = c.getContext("2d")

let getBtn = () => {
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            let letterWord = document.querySelectorAll(".word__letter")
            let find = false;
            //SI la lettre cliquée est dans le mots à deviner, alors ajouter
            for( i in guessWord){
                if(btn.innerHTML === guessWord[i]){
                    btn.disabled = true;
                    find = true;
                    for(ltr in letterWord){
                        letterWord[i].style.display = "block"
                        console.log("display")
                    }
                } else {
                    btn.disabled = true;
                }
            }
            if(!find){
                addMember()
                getCount()
            }
        })
    })
}

let addMember= () =>{
    switch (count){
        case 6:
            ctx.drawImage(head, 132, 33)
            break;
        case 5: 
            ctx.drawImage(body, 150, 50)
            ctx.drawImage(head, 132, 33)
            break;
        case 4:
            ctx.drawImage(armL, 140, 60)
            break;
        case 3:
            ctx.drawImage(armR, 160, 57)
            break;
        case 2:
            ctx.drawImage(legL, 154, 80)
            break;
        case 1: 
            ctx.drawImage(legR, 160, 78)
    }
}

let getCount = () => {
    count --
    console.log(count)
}