// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let campominato = document.querySelector(".campo-minato");
const btn = document.getElementById("btn");



btn.addEventListener("click",

    function () {
        campominato.innerHTML = '';
        for (let i = 1; i <= 100; i++) {
            let nuovoElemento = creaBox(i);
            nuovoElemento.addEventListener("click",
                function () {
                    nuovoElemento.classList.toggle("clicked");
                });
 
                campominato.appendChild(nuovoElemento);
        }
    });



function creaBox (index){

    const box = document.createElement("div");
    box.classList.add("box");
    box.append(index);
    return box;
}    