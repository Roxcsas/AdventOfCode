let myInput = ``;

myInput = myInput.split("\n");
const r = /\d+/;

let games = [];
let redMax = 12;
let greenMax = 13;
let blueMax = 14;


for (let el of myInput) {
    el = el.split(':');
    el[1] = el[1].split(';');
    let cubes = [];
    for (let cube of el[1]) {
        cubes.push(cube.split(','));
    }
    games.push([((el[0].match(r))[0] * 1), cubes]);
}


//part 1
gamesIdTot = 0;
for (let game of games) {
    gameId = game[0];
    cubesGames = game[1];
    let gamesCheck = true;
    for (let cubegame of cubesGames) {
        for (let cube of cubegame) {
            const cubeNumber = (cube.match(r)[0] * 1);
            if (cube.indexOf('red') !== -1) {
                if(cubeNumber > redMax) {
                    gamesCheck = false;
                }
            }
            if (cube.indexOf('green') !== -1) {
                if(cubeNumber > greenMax) {
                    gamesCheck = false;
                }
            }
            if (cube.indexOf('blue') !== -1) {
                if(cubeNumber > blueMax) {
                    gamesCheck = false;
                }
            }
        }
    }
    if(gamesCheck === true){
        gamesIdTot += gameId;
       }
}

//console.log(gamesIdTot);

//part 2
gameTot = 0;
for (let game of games) {
    gameId = game[0];
    cubesGames = game[1];
    let redCubeMax = 0;
    let greenCubeMax = 0;
    let blueCubeMax = 0;
    for (let cubegame of cubesGames) {
        for (let cube of cubegame) {
            const cubeNumber = (cube.match(r)[0] * 1);
            if (cube.indexOf('red') !== -1) {
                if(redCubeMax < cubeNumber) {
                    redCubeMax = cubeNumber;
                }
            }
            if (cube.indexOf('green') !== -1) {
                if(greenCubeMax < cubeNumber) {
                    greenCubeMax = cubeNumber;
                }
            }
            if (cube.indexOf('blue') !== -1) {
                if(blueCubeMax < cubeNumber) {
                    blueCubeMax = cubeNumber;
                }
            }
        }
    }
    gameTot += (redCubeMax * greenCubeMax * blueCubeMax);
}

console.log(gameTot);