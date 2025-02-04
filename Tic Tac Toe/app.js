let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector('#new-btn');
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true // turn of personX, personO
let count = 0   //for game Draw

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame = ()=>{
    turnO = true;
    enableBtns();
    msg-msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked!");
        if(turnO){    //playerO
            box.innerText = "O";
            box.style.color = "#b0413e";
            turnO = false;
        }
        else{         //playerX
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;
        count++;
        isWinner = checkWinner();
        if(count ===  9 && !isWinner){
            gameDraw();
        }
    })
})
const gameDraw = ()=>{
    msg.innerText = "Game was Draw!";
    msgContainer.classList.remove("hide");
    DisableBtns();
}
const DisableBtns = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBtns = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    DisableBtns();
}
const checkWinner =()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner is ", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
}
resetBtn.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)
