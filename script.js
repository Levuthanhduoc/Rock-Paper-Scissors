let computer = document.getElementById("computer");
let user = document.getElementById("user");
/**get computer choice */
function getComputerChoice() {
    let Ramdom_choice = Math.floor(Math.random()*3);
    switch(Ramdom_choice){
        case 0: 
                return "rock";
        case 1: 
                return "paper";
        case 2: 
                return "scisscor";
        default:
    }       
}
/**insert image*/
function addimage(target,choice){
    switch(choice){
        case "rock": 
            target.innerHTML = "<img src=\"Img/rock.svg\"width=\"100px\" height=\"100px\">";
            break;
        case "paper": 
            target.innerHTML = "<img src=\"Img/paper.svg\"width=\"100px\" height=\"100px\">";
            break;
        case "scissor": 
            target.innerHTML = "<img src=\"Img/scissor.svg\"width=\"100px\" height=\"100px\">";
            break;
        default:
    }        
}
/**get user choice */
/**Compare 2 choice*/
function getResult(computerChoice,userChoice){
    let result = document.getElementById("result");
    if(computerChoice == userChoice ){
        result.innerHTML = "TIE";
    }
    else if (computerChoice == "rock" && userChoice == "paper"){
        result.innerHTML = "PC WIN";
    }
    else if (computerChoice == "scissor" && userChoice == "rock"){
        result.innerHTML = "PC WIN";
    }
    else if (computerChoice == "paper" && userChoice == "scissor"){
        result.innerHTML = "PC WIN";
    }
    else {
        result.innerHTML = "CP WIN";
    }
}
/**Run*/
function startGame(userChoice){
    let CP = getComputerChoice();
    let PC = userChoice;
    addimage(computer,CP);
    addimage(user,PC);
    getResult(CP,PC);
}