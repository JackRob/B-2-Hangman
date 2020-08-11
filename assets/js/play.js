let play = document.getElementById("play")
let reset = document.getElementById("reset")

//Liste de mots 
let words = [
    "pirate", "boucanier", "flibustier", "ocean", "mer",
    "bateau", "barque", "tonneaux", "poudre", "canon",
    "pistolet", "sabre", "bicorne", "pont", "boussole",
    "vague", "corsaire", "kraken", "rhum", "caraibes",
    "navire", "equipage", "drapeau", "squelette", "pavillon",
    "tresor", "coffre", "carte", "ile"
]

//Prendre le mot random dans la liste
let getRdnWord = () => {
    rdn = Math.round(Math.random() * words.length)
    guessWord = words[rdn].toUpperCase()
    console.log(guessWord)
}

//Au bouton play, choisir le mot random
play.addEventListener("click", () => {
    play.style.display = "none";
    getStart()
})

reset.addEventListener("click", () => {
    location.reload()
})

let getStart = () => {
    reset.style.display = "inline"

    getRdnWord()
    // Ajouts de la div et du li pour la lettre trouvée
    for (i in guessWord) {
        let dash = document.createElement('li')
        let letter = document.createElement("div")
        letter.className = "word__letter"
        letter.innerHTML = guessWord[i]
        dash.appendChild(letter)
        word.appendChild(dash)
    }

    //Lettres à appuyer
    getBtn()
}
