let numero = Math.floor(Math.random() * 100) + 1;
console.log("Numero da Sorte: ", numero);

let tentativas = 0;

function jogarAdivinhacao() {
    event.preventDefault();

    while (true) {
        let palpite = Number(document.getElementById("numero").value)
        console.log(palpite);
        tentativas++;
        if (palpite > numero) {
            console.log("Palpite muito Alto!");
            break;
        }
        else if (palpite < numero) {
            console.log("Palpite muito baixo!");
            break;
        }
        else {
            console.log("Palpite correto!");
            console.log("Número de Tentativas: ", tentativas);
            break;
        }

    }

}