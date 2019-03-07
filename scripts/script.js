let comp = 0;
let user = 0;
for (i=1; i<Infinity; i++){
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
                comp++;
                break;
            case dS == 'scissors':
                console.log('You win');
                user++;
                break;
        }

    }
    else if (pS == 'paper'){
        switch (pS == 'paper'){
            case dS == 'rock':
                console.log('You win');
                user++;
                break;
            case dS == 'paper':
                console.log('Tie');
                break;
            case dS == 'scissors':
                console.log('You lose');
                comp++
                break;
        }
    }
    else if (pS == 'scissors'){
        switch(pS == 'scissors'){
            case dS == 'rock':
                console.log('You win');
                user++
                break;
            case dS == 'paper':
                console.log('You lose');
                comp++;
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
console.log('Games played: '+i);
console.log('User score: '+user);
console.log('Computer score: '+comp);
console.log("------------------------------");
if(comp == 5){
    console.log ('Computer wins!');
    break;
}
else if ( user == 5 ){
    console.log ('User wins!');
    break;
}
}
