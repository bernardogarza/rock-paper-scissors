function playerSelection(){
    let selection = prompt('Rock, Paper or Scissors?').toLowerCase();
    return selection;
}


function computerSelection(){
    let ar = ['rock','paper','scissors'];
    let computerChoice = ar[Math.floor(Math.random()*ar.length)];
    return computerChoice;
}

function game(){
    if (pS == 'rock') {
        switch (pS=='rock'){
            case dS == 'rock':
                console.log("Tie");
                break;
            case dS == 'paper':
                console.log('You lose');
                break;
            case dS == 'scissors':
                console.log('You win');
                break;
        }

    }
    else if (pS == 'paper'){
        switch (pS == 'paper'){
            case dS == 'rock':
                console.log('You win');
                break;
            case dS == 'paper':
                console.log('Tie');
                break;
            case dS == 'scissors':
                console.log('You lose');
                break;
        }
    }
    else if (pS == 'scissors'){
        switch(pS == 'scissors'){
            case dS == 'rock':
                console.log('You win');
                break;
            case dS == 'paper':
                console.log('You lose');
                break;
            case dS == 'scissors':
                console.log('Tie');
                break;
        }
    }
    else {
        alert('Invalid input: '+pS);
    }
}

let pS = playerSelection();
console.log ('User: '+pS);
let dS = computerSelection();
console.log('Computer: '+dS);
let result = game();