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
    // Nombre de lettre à chercher
    let nextTo = guessWord.length
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            let letterWord = document.querySelectorAll(".word__letter")
            let find = false;
            //SI la lettre cliquée est dans le mots à deviner, alors ajouter
            for (i in guessWord) {
                if (btn.innerHTML === guessWord[i]) {
                    btn.disabled = true;
                    find = true;
                    for (ltr in letterWord) {
                        letterWord[i].style.display = "block"
                        console.log("display")
                    }
                } else {
                    btn.disabled = true;
                }
            }

            if (find) {
                nextTo--
                console.log(nextTo)
                if (nextTo <= 0) {
                    gameOver()
                }
            } else {
                //Si la lettre choisies est pas bonnes, on rajoutes un membre
                addMember()
                getCount()

            }
        })
    })
}

let addMember = () => {
    switch (count) {
        case 6:
            ctx.drawImage(head, 132, 33)
            break;
        case 5:
            ctx.drawImage(body, 150, 50)
            ctx.drawImage(head, 132, 33)
            break;
        case 4:
            ctx.drawImage(armL, 160, 57)
            break;
        case 3:
            ctx.drawImage(armR, 140, 57)
            break;
        case 2:
            ctx.drawImage(legL, 154, 80)
            break;
        case 1:
            ctx.drawImage(legR, 157, 78)
    }
}

let getCount = () => {
    count--
    if (count <= 0) {
        gameOver()
    }
    console.log(count)
}

let gameOver = () => {
    btns.forEach(btn => {
        btn.disabled = true;
    })
}