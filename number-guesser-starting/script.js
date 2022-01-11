let humanScore = 0;
let computerScore = 0;
let noOneScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 0)
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

    if(humanGuess == secretTarget && computerGuess == secretTarget){
        return 'empate'
    }else if(humanGuess == secretTarget){
        return 'human'
    }else if(computerGuess == secretTarget){
        return 'computer'
    }else{
        return 'nenhum'
    }

}

const updateScore = winner => {

    if(winner === 'human'){
        humanScore += 1;
    }else if(winner === 'computer'){
        computerScore += 1;
    }else{
        noOneScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}

console.log('>>> '+generateTarget())