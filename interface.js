
document.addEventListener("DOMContentLoaded", () => {
    // ação sera executada quando o documento for carregado

    let squares = document.querySelectorAll(".square");
    // metodo que retorno uma node list (está selecionando todas as classes .square)

    squares.forEach((square) => {
        // O método forEach() pegará cada square do QuerySelectorAll

        square.addEventListener('click', handleClick);
        // em cada square do .forEach, será adicionado o evento click e a função handleClick
    })

    let button = document.getElementsByClassName('button')[0]
})

function handleClick(event) {

    let square = event.target; // event.target = elemento que sofreu a ação/evento (no caso o .square/quadrado)
    let position = square.id; // position no arquivo game será igual ao quadrado do board + id do html

    if (handleMove(position)) { //a função handleMove quer dizer o ato de colocar um simbolo numa posição do board

        setTimeout(() => {
            if (velha) {
                alert("O jogo deu Velha!!")

            } else if (playertime == 0) {
                alert("O jogo foi encerrado e " + [jogador1.value] + " foi o vencedor")
            
            }else if (playertime == 1) {
                alert("O jogo foi encerrado e " + [jogador2.value] + " foi o vencedor")
            }


        }, 100)

    };
    updateSquare(position);
}


function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`


    if (gameOver == false) {  // quando o gameOver for false, quer dizer que o jogo nao acabou

    } else if (gameOver == true && velha == false) {
        turn.innerHTML = `o vencedor foi ${playertime}`

    } else if (velha == true) {
        turn.innerHTML = "velha!!"
    }

}



