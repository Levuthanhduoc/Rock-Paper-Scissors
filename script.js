let computer = document.getElementById("computer");
let user = document.getElementById("user");
let score = [0,0];
const second = 1000;
function initialSetUp(){
    enableStarbutton();
}initialSetUp();

function enableStarbutton(){
    let start = document.querySelector("#start");
    start.addEventListener("click",function (){
        disableUserInterface();
        startGame();
        start.textContent= "Reset";
        score = [0,0];
        showScore();
    });
    start.classList.remove("fading");
}
function disableUserInterface(){
    let keys = document.querySelectorAll("#key");
    keys.forEach(key => {
        key.classList.add("fading");
        let newKey = key.cloneNode(true);
        key.parentNode.replaceChild(newKey,key);
    });
}

/**get computer choice */
function getComputerChoice() {
    let Ramdom_choice = Math.floor(Math.random()*3);
    switch(Ramdom_choice){
        case 0: 
                return "ROCK";
        case 1: 
                return "PAPER";
        case 2: 
                return "SCISSOR";
        default:
    }       
}
function imageAnimation(location){
    location.classList.add("scaleUP");
    setTimeout(function(){
        location.classList.remove("scaleUP")
    },second/4);
}
/**insert image*/
function addimage(target,choice){
    switch(choice){
        case "ROCK":
            imageAnimation(target);
            target.innerHTML = "<img src=\"Img/rock.svg\"width=\"100px\" height=\"100px\">";
            break;
        case "PAPER": 
            imageAnimation(target);
            target.innerHTML = "<img src=\"Img/paper.svg\"width=\"100px\" height=\"100px\">";
            break;
        case "SCISSOR": 
            imageAnimation(target);
            target.innerHTML = "<img src=\"Img/scissor.svg\"width=\"100px\" height=\"100px\">";
            break;
        default:
    }        
}
/**get user choice */
/**Compare 2 choice*/
function showScore(){
    let scoreLocation = document.querySelectorAll("#score");
    scoreLocation = Array.from(scoreLocation);
    scoreLocation[1].textContent = score[1] + ":Player"
    scoreLocation[0].textContent ="Computer:" + score[0];
}
function getScore(computerChoice,userChoice){
    if(computerChoice == userChoice ){
        return;
    }
    else if (computerChoice == "ROCK" && userChoice == "PAPER"){
        score[1]++;
    }
    else if (computerChoice == "SCISSOR" && userChoice == "ROCK"){
        score[1]++;
    }
    else if (computerChoice == "PAPER" && userChoice == "SCISSOR"){
        score[1]++;
    }
    else {
        score[0]++;
    }
}
/**Run*/
function RunGame(userChoice){
    let CP = getComputerChoice();
    let PC = userChoice;
    addimage(computer,CP);
    addimage(user,PC);
    getScore(CP,PC);
    showScore();
    showResult(score);
    console.log(score);
}

function startGame(){
    let keys = document.querySelectorAll("#key");
    let showStart = document.getElementById("result");
    keys.forEach(key => {
        key.classList.remove("fading");
        key.addEventListener("click",(e)=>{
            RunGame(key.textContent);
        });
    });
    showStart.textContent = "Let Fight!!!!!!"
}
function showResult(score){
    let result = document.getElementById("result");
    if(score[1] == 5){
        result.textContent = "PC is a WINNER!!!!"
    }
    else if (score[0] == 5){
        result.textContent = "CP is a WINNER!!!!"
    }
    else{
        return;
    }
    disableUserInterface();
}