const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#successtext")
const restartBtn = document.querySelector("#RestartBtn")

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["","","","","","","","",""];
let CurrentPlayer = "x"
let running = false;
initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent = `${CurrentPlayer}'s Turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if (options [cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    
    checkWinner();

}
function updateCell(cell, index){

    options[index] = CurrentPlayer;
    cell.textContent = CurrentPlayer;
    

}
function changePlayer() {
    CurrentPlayer = (CurrentPlayer === "x") ? "o" : "x";
    statusText.textContent = `${CurrentPlayer}'s turn`;
}


function checkWinner(){
    let roundone = false;

    for (let i=0; i<winCondition.length; i++){
        const condition = winCondition[i]
        const  cellA = options[condition[0]];
        const  cellB = options[condition[1]];
        const  cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if (cellA == cellB && cellB == cellC){
            roundone = true;
            break;
        }
    }

    if (roundone){
        statusText.textContent = `${CurrentPlayer} Wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`
        running = false;

    }
    else{
        changePlayer();
    }
}
function restartGame(){
    document.getElementById("RestartBtn").onclick = function(){
        location.reload();
    }
}