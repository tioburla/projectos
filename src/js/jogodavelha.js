let dialog_game = document.querySelector(".game_dialog");
let player_dialog = document.querySelector(".player_dialog");
const jogador = document.querySelector(".player");
let selecionar;
let player = "X";
let text;

let posicao = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function page_game() {
    dialog_game.showModal();
    elements.style.opacity = 0.1;
}
function close_game() {
    dialog_game.close();
    elements.style.opacity = 1;
    init();
}

function init() {
    selecionar = [];

    jogador.innerHTML = `JOGADOR DA VEZ: ${player}`;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selecionar[index] = player;

    setTimeout(() => {
        check();
    }, [100]);

    player = player === "X" ? "O" : "X";
    jogador.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
    let ultimaJogada = player === "X" ? "O" : "X";

    const items = selecionar
        .map((item, i) => [item, i])
        .filter((item) => item[0] === ultimaJogada)
        .map((item) => item[1]);
        
    for (pos of posicao) {
        if (pos.every((item) => items.includes(item))){
            let text = `<h2>Jogador ${ultimaJogada} GANHOU</h2>`;
            document.querySelector(".text_player").innerHTML = text;
            player_win();
            init();
            return;

        }
    }

    if (selecionar.filter((item) => item).length === 9){
        let text = `<h2>ESTE JOGO DEU VELHA !!</h2>`;
        document.querySelector(".text_player").innerHTML = text;
        player_win();
        init();
        return;
    }
}

function player_win(){
    player_dialog.showModal();
    dialog_game.style.opacity = 0.4;
    elements.style.opacity = 0;
}
function close_player() {
    player_dialog.close();
    elements.style.opacity = 1;
    dialog_game.style.opacity = 1;
    init();
}
