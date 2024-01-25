let myInput = ``;

myInput = myInput.split("\n");

//part1


//set seeds
let seeds = [];
let tempImput = myInput[0].split(":");
tempImput[1] = tempImput[1].split(" ");
tempImput[1] = tempImput[1].filter(Number);
seeds = tempImput[1];
seeds = seeds.map(str => { return parseInt(str, 10) });

let seedsCoordinatesInstructions = [];

let tempStartingInput = [];
for (let i = 2; i < myInput.length; i++) {
    if (i === myInput.length - 1) {
        tempStartingInput.push(myInput[i]);
        seedsCoordinatesInstructions.push(tempStartingInput);
        tempStartingInput = [];
    }
    else if (!myInput[i]) {
        seedsCoordinatesInstructions.push(tempStartingInput);
        tempStartingInput = [];
    }

    else {
        tempStartingInput.push(myInput[i]);
    }
}

for (let seedN = 0; seedN < seeds.length; seedN++) {
    for (let i = 0; i < seedsCoordinatesInstructions.length; i++) {
        for (let coordinate = 1; coordinate < seedsCoordinatesInstructions[i].length; coordinate++) {
            let coordinatesArray = [];
            coordinatesArray = seedsCoordinatesInstructions[i][coordinate].split(" ");
            coordinatesArray = coordinatesArray.map(str => { return parseInt(str, 10) });
            let destinationRangeStart = coordinatesArray[0];
            //console.log('destinationRangeStart ' + destinationRangeStart);
            let sourceRangeStart = coordinatesArray[1];
            //console.log('sourceRangeStart ' + sourceRangeStart);
            let rangeLength = coordinatesArray[2];
            //console.log('rangeLength ' + rangeLength);
            if (seeds[seedN] >= sourceRangeStart && seeds[seedN] < sourceRangeStart + rangeLength) {
                //seed its inside the range
                seeds[seedN] += (destinationRangeStart - sourceRangeStart);
                break;
            }
        }
    }
}

console.log(Math.min(...seeds));

/*

//part2

//set seeds
let seeds = [];
let newSeedsArray = [];
let tempImput = myInput[0].split(":");
tempImput[1] = tempImput[1].split(" ");
tempImput[1] = tempImput[1].filter(Number);
seeds = tempImput[1];
seeds = seeds.map(str => { return parseInt(str, 10) });

for(let i = 0; i< seeds[1]; i++){
    newSeedsArray.push((seeds[0] + i));
}
for(let i = 0; i< seeds[3]; i++){
    newSeedsArray.push((seeds[2] + i))
}

seeds = newSeedsArray;

console.log(seeds);


let seedsCoordinatesInstructions = [];

let tempStartingInput = [];
for (let i = 2; i < myInput.length; i++) {
    if (i === myInput.length - 1) {
        tempStartingInput.push(myInput[i]);
        seedsCoordinatesInstructions.push(tempStartingInput);
        tempStartingInput = [];
    }
    else if (!myInput[i]) {
        seedsCoordinatesInstructions.push(tempStartingInput);
        tempStartingInput = [];
    }

    else {
        tempStartingInput.push(myInput[i]);
    }
}

for (let seedN = 0; seedN < seeds.length; seedN++) {
    for (let i = 0; i < seedsCoordinatesInstructions.length; i++) {
        for (let coordinate = 1; coordinate < seedsCoordinatesInstructions[i].length; coordinate++) {
            let coordinatesArray = [];
            coordinatesArray = seedsCoordinatesInstructions[i][coordinate].split(" ");
            coordinatesArray = coordinatesArray.map(str => { return parseInt(str, 10) });
            let destinationRangeStart = coordinatesArray[0];
            //console.log('destinationRangeStart ' + destinationRangeStart);
            let sourceRangeStart = coordinatesArray[1];
            //console.log('sourceRangeStart ' + sourceRangeStart);
            let rangeLength = coordinatesArray[2];
            //console.log('rangeLength ' + rangeLength);
            if (seeds[seedN] >= sourceRangeStart && seeds[seedN] < sourceRangeStart + rangeLength) {
                //seed its inside the range
                seeds[seedN] += (destinationRangeStart - sourceRangeStart);
                break;
            }
        }
    }
}

console.log(Math.min(...seeds));

*/
