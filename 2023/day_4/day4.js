let myInput = ``;


myInput = myInput.split("\n");
let startingInput = [];

//part 1

for (let x of myInput) {
    let splittedCard = x.split(":");
    splittedCard.splice(0, 1);
    for (let splittedNumbers of splittedCard) {
        splittedNumbers = splittedNumbers.split("|");
        startingInput.push(splittedNumbers);
    }
}

function findIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

let finalStartingInput = [];
let finalResult = 0;
for (let el of startingInput) {
    arrayOne = el[0];
    arrayTwo = el[1];
    arrayOne = arrayOne.split(" ");
    arrayOne = arrayOne.filter(Number);
    arrayTwo = arrayTwo.split(" ");
    arrayTwo = arrayTwo.filter(Number);
    winningNumbers = findIntersection(arrayOne, arrayTwo);
    n = winningNumbers.length;
    tempResult = 2;
    if (n === 1) {
        finalResult += 1;
    }
    else if (n === 2) {
        finalResult += 2;
    }
    else if (n !== 1 && n !== 2 && n) {
        for (let x = 2; x < n; x++) {
            tempResult = tempResult * 2;
        }
        finalResult += tempResult;
    }
}

console.log(finalResult);

// part 2

let cardWithValue = [];

for (let x of myInput) {
    let splittedCard = x.split(":");
    splittedCard.splice(0, 1);
    for (let splittedNumbers of splittedCard) {
        splittedNumbers = splittedNumbers.split("|");
        splittedNumbers.push(1);
        cardWithValue.push(splittedNumbers);
    }
}

function findIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

let nWinningCards = 0;
let cardsNumber = 0;
for (let i = 0; i < cardWithValue.length; i++) {
    arrayOne = String(cardWithValue[i][0]).split(" ");
    arrayTwo = String(cardWithValue[i][1]).split(" ");
    arrayOne = arrayOne.filter(Number);
    arrayTwo = arrayTwo.filter(Number);
    winningNumbers = findIntersection(arrayOne, arrayTwo);
    nWinningNumbers = winningNumbers.length;
    if (nWinningNumbers > 0) {
        for (let wCards = 0; wCards < cardWithValue[i][2]; wCards++) {
            for (n = 1; n <= nWinningNumbers; n++) {
                if (cardWithValue[i + n]) {
                    cardWithValue[i + n][2]++;
                }
            }
        }
    }
    cardsNumber += cardWithValue[i][2];
}

console.log(cardsNumber);
