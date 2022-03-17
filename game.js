// arquivo sobre as regras do jogo

// iniciar as minhas variaveis

let board = ['', '', '', '', '', '', '', '', '',]; // espaços em branco do tabuleiro
let playertime = 0; // jogador da vez (0 ou 1)
let symbols = ['o', 'x']; // simbolos de cada jogador
let gameOver = false //  gameOver vai ser false primeiro
let velha = false

let winStates = [ //todas as possibilidades de vitoria (em relação as posições)

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


function handleMove(position) { //a função handleMove quer dizer o ato de colocar um simbolo numa posição do board

    let squares = document.querySelectorAll(".square"); 

    if (gameOver) { // gameover começa falso
        return;
    }

    if (board[position] == '') { 
        board[position] = symbols[playertime];
        // LEIA-SE: se a posição x for vazia, a posição x vai receber um simbolo do playertime da vez

        gameOver = isWin(); //verificação se teve uma sequencia vitoriosa

        if (!gameOver) verifyVelha() // ??

        if (gameOver == false) { 
            playertime = (playertime == 0) ? 1 : 0
            // LEIA-SE: se o game over for falso, o playertime vai trocar de 0 pra 1 sucessivamente

        }
    }

    return gameOver
}


function isWin() {  // FUNÇÃO VERIFICAR VENCEDOR

    for (let i = 0; i < winStates.length; i++) {

        let seq = winStates[i]; //em cada rodada o winStates vai ler se tem algum sequencia vitoriosa

        let pos1 = seq[0]; // aqui le se a posição [0] corresponde a sequencia [0] vitoriosa
        let pos2 = seq[1]; // aqui le se a posição [1] corresponde a sequencia [1] vitoriosa
        let pos3 = seq[2]; // aqui le se a posição [2] corresponde a sequencia [2] vitoriosa

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true;
        }
    }

    return false;

}

function verifyVelha() { // FUNÇÃO VERIFICAR VELHA
        let cont = 0 // começa contando do zero
    
        board.forEach(item => { // pega o board em cada pedaço
            if (item != "") cont++
        })
    
        if (cont == board.length) {
            gameOver = true
            velha = true
        }
    }




// DESAFIO
// CRIAR UM BOTÃO PARA RECOMEÇAR UM NOVO JOGO E FALAR O SIMBOLO DO JOGADOR


// ESSE JOGO FOI CRIADO COM MVC (MODEL VIEW CONTROLER)