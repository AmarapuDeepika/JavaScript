let userScore = 0;
let compScore = 0;

let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const getCompChoice=()=>{
    const options = ["rock", "paper", "scissors"];
    let opIndx = Math.floor(Math.random()*3);
    return options[opIndx];
}

const Drawgame = ()=>{
    // console.log("game was draw");
    msg.innerText = "Game was Draw! play agani!";
    msg.style.backgroundColor = "black";
}
const showUserWin = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    console.log("user choice is", userChoice);
    const compChoice = getCompChoice();
    console.log("comp Choice is", compChoice);

    if(userChoice === compChoice){
        //Its a Draw
        Drawgame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showUserWin(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
