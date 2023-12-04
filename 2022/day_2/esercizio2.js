let inputValue = ``;

inputValue.split("\n");

opponentInput = []
userInput = [];

inputSwitch = true;

for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] != " " && inputValue[i] != "\n" && inputSwitch) {
        if (inputValue[i] == "A") {
            opponentInput.push(1);
        }
        else if (inputValue[i] == "B") {
            opponentInput.push(2);
        }
        else if (inputValue[i] == "C") {
            opponentInput.push(3);
        }
        inputSwitch = !inputSwitch;
    }
    else if (inputValue[i] != " " && inputValue[i] != "\n" && !inputSwitch) {
        if (inputValue[i] == "X") {
            userInput.push(1);
        }
        else if (inputValue[i] == "Y") {
            userInput.push(2);
        }
        else if (inputValue[i] == "Z") {
            userInput.push(3);
        }
        inputSwitch = !inputSwitch;
    }

}

let userScore = 0;

for (let i = 0; i < opponentInput.length && userInput.length; i++) {
    let round = Math.abs(opponentInput[i] - userInput[i]);

    if (round == 0) {
        //draw
        userScore += (userInput[i] + 3);
    }
    else if (round == 1) {
        //max win
        if (userInput[i] == Math.max(opponentInput[i], userInput[i])) { //win
            userScore += (userInput[i] + 6)
        }
        else {
            userScore += userInput[i]; //lose
        }
    }
    else if (round == 2) {
        //min win
        if (userInput[i] == Math.min(opponentInput[i], userInput[i])) { //win
            userScore += (userInput[i] + 6)
        }
        else {
            userScore += userInput[i]; //lose
        }
    }
}

console.log(userScore);

userScore = 0;

for (let i = 0; i < opponentInput.length && userInput.length; i++) {
    if (userInput[i] == 1) {
        //lose
        if (opponentInput[i] == 1) {
            userScore += 3;
        }
        else {
            userScore += opponentInput[i] - 1;
        }
    }
    if (userInput[i] == 2) {
        //draw
        userScore += (opponentInput[i] + 3);
    }
    if (userInput[i] == 3) {
        //win
        if (opponentInput[i] == 3) {
            userScore += (1 + 6);
        }
        else {
            userScore += ((opponentInput[i] + 1) + 6);
        }
    }

}

console.log(userScore);