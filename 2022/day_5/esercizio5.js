let cargoLogistic = ``;

let cargoMovement = cargoLogistic.split("\n");

let moveN = [];
let startingN = []; //1-9
let finalN = []; //1-9

let cargoOne = ["L", "N", "W", "T", "D"];
let cargoTwo = ["C", "P", "H"];
let cargoThree = ["W", "P", "H", "N", "D", "G", "M", "J"];
let cargoFour = ["C", "W", "S", "N", "T", "Q", "L"];
let cargoFive = ["P", "H", "C", "N"];
let cargoSix = ["T", "H", "N", "D", "M", "W", "Q", "B"];
let cargoSeven = ["M", "B", "R", "J", "G", "S", "L"];
let cargoEigth = ["Z", "N", "W", "G", "V", "B", "R", "T"];
let cargoNine = ["W", "G", "D", "N", "P", "L"];

let cargoList = [" ", cargoOne, cargoTwo, cargoThree, cargoFour, cargoFive, cargoSix, cargoSeven, cargoEigth, cargoNine];

//metodo per ordinare i dati negli array
let x = "";
let counter = 1;
for (let i = 0; i < cargoMovement.length; i++) {

    let arrayInterno = cargoMovement[i].split("");
    for (let n = 0; n < arrayInterno.length; n++) {
        let aaa = arrayInterno[n];
        if (!isNaN(arrayInterno[n]) && arrayInterno[n] != " ") {
            if (counter == 1) {
                x = arrayInterno[n];
                counter = 2;
                n++;
                if (!isNaN(arrayInterno[n]) && arrayInterno[n] != " ") {
                    let bbb = arrayInterno[n];
                    x += arrayInterno[n];
                    moveN.push(x * 1);
                }
                else {
                    moveN.push(x * 1);
                }
            }
            else if (counter == 2) {
                x = arrayInterno[n];
                startingN.push(x * 1);
                counter = 3
            }
            else if (counter == 3) {
                x = arrayInterno[n];
                finalN.push(x * 1);
                counter = 1;
            }
        }
    }
}


//riordinamento parte uno
function riordinamentoUno() {
    for (let i = 0; i < moveN.length; i++) {
        for (let move = moveN[i]; move > 0; move -= 1) {

            //ottiene l'index dell'array dove prendere l'item
            let arrayLimit = cargoList[startingN[i]].length - 1;

            //ottiene l'item
            let item = cargoList[startingN[i]][arrayLimit];

            //rimuove l'item da spostare
            cargoList[startingN[i]].pop();

            //aggiunge l'item spostato
            cargoList[finalN[i]].push(item);
        }
    }


    let cargoListFinalOne = "";
    for (let i = 1; i < 10; i++) {
        cargoListFinalOne += cargoList[i][cargoList[i].length - 1];
    }

    console.log(cargoListFinalOne);
}



//riordinamento parte due
function riordinamentoDue() {
    for (let i = 0; i < moveN.length; i++) {

        for (let move = moveN[i]; move > 0; move -= 1) {

            //ottiene l'index dell'array dove prender l'ultimo item
            let arrayLimit = cargoList[startingN[i]].length - move;

            //ottiene l'item
            let item = cargoList[startingN[i]][arrayLimit];

            //rimuove l'item da spostare
            cargoList[startingN[i]].splice(arrayLimit, 1);

            //aggiunge l'item spostato
            cargoList[finalN[i]].push(item);
        }

    }



    let cargoListFinalTwo = "";
    for (let i = 1; i < 10; i++) {
        cargoListFinalTwo += cargoList[i][cargoList[i].length - 1];
    }

    console.log(cargoListFinalTwo);
}