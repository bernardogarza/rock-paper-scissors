function random_item(computerPlay){
  
    return computerPlay[Math.floor(Math.random()*computerPlay.length)];
}


    playerSelection = prompt('Rock, Paper or Scissors?');
    playerSelection = playerSelection.toLowerCase();
    console.log('Player: '+ playerSelection);

    const computerPlay = ['rock','paper','scissors'];
    console.log('Computer: ' + random_item(computerPlay));
    let computerSelection = computerPlay;

    if (playerSelection === computerSelection){
        console.log('tie')
    }