// document.addEventListener("DOMContentLoaded", function() {



// console.clear();
console.log("hi");


function randomNo(){
   const choice= Math.ceil(Math.random()*3);
   return choice;
}

function compChoice(){
    const choice=randomNo();
    if(choice==1){
        return "rock";
    }
    else if(choice==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function userChoice(){
    let entered= prompt("enter \"rock\", \"paper\" or, \"scissors\"");
   entered=entered.toLowerCase();
    if(entered=="rock"||entered=="paper"||entered=="scissors"){
        return entered;
    }
    else{
        alert("can you not read??")
        userChoice();
    }
}


function rps(){
    const choice=compChoice();
    const entered=userChoice();

    console.log(`you entered: ${entered}`);
    console.log(`computer entered: ${choice}`);

    let won="draw";
    if(choice!=entered){
        if(choice=="rock"){
            if(entered=="paper"){
                won="you";
            }
            else{
                won="comp";
            }
        }
        else if(choice=="paper"){
            if(entered=="rock"){
                won="comp";
            }
            else{
                won="you";
            }
        }
        else if(choice=="scissors"){
            if(entered=="rock"){
                won="you";
            }
            else{
                won="comp";
            }
        }
    }
    console.log(won);
    alert(`${won} won`);
    return won;
}

function fiveRounds(){
    let userWins=0;
    let compWins=0;

    for(let i=1;i<=5;i++){
        let whoWon= rps();
        if(whoWon=="you"){
            userWins++;
        }
        else if(whoWon=="comp"){
            compWins++;
        }
        console.log("\n");
    }

    console.log("\n\n");
    console.log(`FINAL SCORES`);
    console.log(`YOU: ${userWins}`);
    console.log(`COMPUTER: ${compWins}`);

    if(userWins==compWins){
        console.log("no one won");
        alert("no one won");
    }
    else{
        if(userWins>compWins){
            console.log("you won the tournament! congo!!");
            alert("you won the tournament! congo!!");
        }
        else{
            console.log("computer wins !! you noob . yayyy :))");
            alert("computer wins !! you noob . yayyy :))");
        }
    }
}

fiveRounds();
// });
