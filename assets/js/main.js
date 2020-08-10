
let word = document.getElementById("word")
let btns = document.querySelectorAll("#btnLetter")
let guessWord = "" // Le mot à trouver


//Lettres à appuyer
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        //SI la lettre cliquée est dans le mots à deviner, alors ajouter
        for( i in guessWord){
            if(btn.innerHTML === guessWord[i]){
                console.log("Yey")
                btn.disabled = true;
                //POURQUOOIIIIII
                let letterWord = document.querySelectorAll(".word__letter")
               for(ltr in letterWord){
                letterWord[i].style.display = "block"
               }
            } else {
                console.log("Nope...")
                btn.disabled = true;
            }
        }
    })
})
