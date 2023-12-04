let input = "";

let marker = input.split("");

let finalValue;

for (let i = 0; i < marker.length - 3; i++) {

    let mySet = new Set();

    for (let n = 0; n < 4; n++) {
        mySet.add(marker[i + n]);
    }

    if (mySet.size == 4) {
        finalValue = i + 4; //aggiunge +1 all'index dell'array per il conteggio
        break;
    }
}

console.log(finalValue);

let finalValueTwo;

for (let i = 0; i < marker.length - 14; i++) {

    let mySet = new Set();

    for (let n = 0; n < 14; n++) {
        mySet.add(marker[i + n]);
    }

    if (mySet.size == 14) {
        finalValueTwo = i + 14; //aggiunge +1 all'index dell'array per il conteggio
        break;
    }
}

console.log(finalValueTwo);