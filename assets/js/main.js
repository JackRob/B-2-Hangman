let word = document.getElementById("word")
let btns = document.querySelectorAll("#btnLetter")
let over = document.getElementsByClassName("over")
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
            //Recupérer la liste de lettre
            let letterWord = document.querySelectorAll(".word__letter")
            let find = false;
            //SI la lettre cliquée est dans le mots à deviner, alors ajouter
            for (i in guessWord) {
                if (btn.innerHTML === guessWord[i]) {
                    btn.disabled = true;
                    find = true;
                    nextTo--
                    console.log(nextTo)
                    for (ltr in letterWord) {
                        letterWord[i].style.display = "block"
                        console.log("display")
                    }
                } else {
                    btn.disabled = true;
                }
            }

            if (find) {
                if (nextTo <= 0) {
                    over[0].innerHTML = `Bravo ! Vous avez trouvé le mot. :)`
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

//Ajouter un membre à chaque erreur
let addMember = () => {
    switch (count) {
        case 6:
            ctx.drawImage(head, 360, 130)
            break;
        case 5:
            ctx.drawImage(body, 420, 170)
            ctx.drawImage(head, 360, 130)
            break;
        case 4:
            ctx.drawImage(armL, 392, 190)
            ctx.drawImage(head, 360, 130)
            break;
        case 3:
            ctx.drawImage(armR, 445, 190)
            break;
        case 2:
            ctx.drawImage(legL, 445, 250)
            break;
        case 1:
            ctx.drawImage(legR, 427, 250)
    }
}

let getCount = () => {
    count--
    if (count <= 0) {
        gameOver()
        over[0].innerHTML = `Perdu.. Le mot à trouver était "${guessWord}"`
    }
    console.log(count)
}

let gameOver = () => {
    btns.forEach(btn => {
        btn.disabled = true;
    })
}
