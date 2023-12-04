let stanze = ``;

stanze = stanze.split("\n");

roomFirstHalf = [];
roomSecondHalf = [];

//formatta i dati
for (let i = 0; i < stanze.length; i++) {
    let splitted = stanze[i].split("");
    let z = 0;
    switchArray = true;
    //pusha nel secondo e finisce l'array
    for (let x = 0; x <= splitted.length; x++) {
        if (x == splitted.length) {
            roomSecondHalf.push(z);
            switchArray = true;
            z = 0;
        }
        //crea il numero
        else if (splitted[x] != "," && splitted[x] != '-') {
            if (z == 0) {
                z = splitted[x];
            }
            else {
                z += splitted[x];
            }
        }
        //pusha nell'array corretto
        else if (splitted[x] == "-") {
            if (switchArray) {
                roomFirstHalf.push(z);
                z = 0;
            }
            else {
                roomSecondHalf.push(z);
                z = 0;
            }
        }
        //pusha nel primo array
        else if (splitted[x] == ",") {
            roomFirstHalf.push(z);
            switchArray = false;
            z = 0;
        }
    }
}

let pairsContained = 0;

//controlla a multipli di 2 se i numeri sono contenuti tra i due
for (let i = 0; i < roomFirstHalf.length - 1; i += 2) {
    if ((roomFirstHalf[i] * 1) <= (roomSecondHalf[i] * 1) && (roomFirstHalf[i + 1] * 1) >= (roomSecondHalf[i + 1] * 1)) {
        pairsContained++;
    }
    else if ((roomSecondHalf[i] * 1) <= (roomFirstHalf[i] * 1) && (roomSecondHalf[i + 1] * 1) >= (roomFirstHalf[i + 1] * 1)) {
        pairsContained++;
    }
}

console.log(pairsContained);

let overlap = 0;

//controlla gli overlap
for (let i = 0; i < roomFirstHalf.length - 1; i += 2) {

    if (roomFirstHalf[i] * 1 == roomSecondHalf[i] * 1 || roomFirstHalf[i] * 1 == roomSecondHalf[i + 1] * 1) {
        overlap++;
    }
    else if (roomFirstHalf[i + 1] * 1 == roomSecondHalf[i] * 1 || roomFirstHalf[i + 1] * 1 == roomSecondHalf[i + 1] * 1) {
        overlap++;
    }
    else if (roomFirstHalf[i] * 1 > roomSecondHalf[i] * 1 && roomFirstHalf[i] * 1 < roomSecondHalf[i + 1] * 1) {
        overlap++;
    }
    else if (roomFirstHalf[i + 1] * 1 > roomSecondHalf[i] * 1 && roomFirstHalf[i + 1] * 1 < roomSecondHalf[i + 1] * 1) {
        overlap++;
    }
    else if (roomSecondHalf[i] * 1 > roomFirstHalf[i] * 1 && roomSecondHalf[i] * 1 < roomFirstHalf[i + 1] * 1) {
        overlap++;
    }
    else if (roomSecondHalf[i + 1] * 1 > roomFirstHalf[i] * 1 && roomSecondHalf[i + 1] * 1 < roomFirstHalf[i + 1] * 1) {
        overlap++;
    }
}

console.log(overlap);