let myInput = ``;

myInput = myInput.split("\n");


function checkSymbol(a) {
    if (isNaN(a) && a !== '.' && a) {
        return true;
    }
    return false;
}

let numArray = [];
for (let row = 0; row < myInput.length; row++) {
    myRow = myInput[row]; //check the row

    let myNum = '';
    let checkNum = false;
    for (let x = 0; x < myRow.length; x++) {
        if (isNaN(myRow[x])) {
            if (checkNum) {
                numArray.push(myNum);
            }
            myNum = '';
            checkNum = false;
        }
        //check if is a number
        if (!isNaN(myRow[x])) {
            //get the number and add it
            myNum += myRow[x];
            //check front and back in same row
            if (checkSymbol(myRow[x - 1]) || checkSymbol(myRow[x + 1])) {
                checkNum = true;
            }
            //check up row
            if (myInput[row - 1] && checkSymbol(myInput[row - 1][x])) {
                checkNum = true;
            }
            //check down row
            if (myInput[row + 1] && checkSymbol(myInput[row + 1][x])) {
                checkNum = true;
            }
            // check the diagonals up
            if (myInput[row - 1] && (checkSymbol(myInput[row - 1][x - 1]) || checkSymbol(myInput[row - 1][x + 1]))) {
                checkNum = true;
            }
            // check the diagonals down
            if (myInput[row + 1] && (checkSymbol(myInput[row + 1][x - 1]) || checkSymbol(myInput[row + 1][x + 1]))) {
                checkNum = true;
            }
        }
        if (x === myRow.length - 1 && checkNum) {
            numArray.push(myNum);
        }
    }

}

finalNum = 0;
for (let x of numArray) {
    finalNum += (x * 1);
}

console.log(finalNum);



// part 2

function checkGear(a) {
    if (isNaN(a) && a === '*' && a) {
        return true;
    }
    return false;
}

let numObjectArray = [];
for (let row = 0; row < myInput.length; row++) {
    myRow = myInput[row]; //check the row

    let myNum = '';
    let symbolPosition = '';
    let checkNum = false;
    for (let x = 0; x < myRow.length; x++) {
        if (isNaN(myRow[x])) {
            if (checkNum) {
                numObjectArray.push({ myNum, symbolPosition });
            }
            myNum = '';
            symbolPosition = '';
            checkNum = false;
        }
        //check if is a number
        if (!isNaN(myRow[x])) {
            //get the number and add it
            myNum += myRow[x];
            //check back row
            if (checkGear(myRow[x - 1])) {
                symbolPosition = row + ',' + (x - 1);
                checkNum = true;
            }
            //check front row
            if (checkGear(myRow[x + 1])) {
                symbolPosition = row + ',' + (x + 1);
                checkNum = true;
            }
            //check up row
            if (myInput[row - 1] && checkGear(myInput[row - 1][x])) {
                symbolPosition = (row - 1) + ',' + x;
                checkNum = true;
            }
            //check down row
            if (myInput[row + 1] && checkGear(myInput[row + 1][x])) {
                symbolPosition = (row + 1) + ',' + x;
                checkNum = true;
            }
            // check the diagonals up-left
            if (myInput[row - 1] && (checkGear(myInput[row - 1][x - 1]))) {
                symbolPosition = (row - 1) + ',' + (x - 1);
                checkNum = true;
            }
            // check the diagonals up-right
            if (myInput[row - 1] && checkGear(myInput[row - 1][x + 1])) {
                symbolPosition = (row - 1) + ',' + (x + 1);
                checkNum = true;
            }
            // check the diagonals down-left
            if (myInput[row + 1] && (checkGear(myInput[row + 1][x - 1]))) {
                symbolPosition = (row + 1) + ',' + (x - 1);
                checkNum = true;
            }
            // check the diagonals down-right
            if (myInput[row + 1] && checkGear(myInput[row + 1][x + 1])) {
                symbolPosition = (row + 1) + ',' + (x + 1);
                checkNum = true;
            }
        }
        if (x === myRow.length - 1 && checkNum) {
            numObjectArray.push({ myNum, symbolPosition });
        }
    }

}

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}


const numbersMap = groupBy(numObjectArray, obj => obj.symbolPosition);

gearSum = 0;
for (const [key, value] of numbersMap.entries()) {
    if (value.length > 1) {
        gearMultiplyNumber = 1;
        for (let el of value) {
            gearMultiplyNumber *= (el.myNum * 1);
        }
        gearSum += gearMultiplyNumber;
    }
}

console.log(gearSum);