let numeri = ``;

numeri = numeri.split("\n");

let calorieTot = [];
let calorie = 0;
let calorieOne = 0;


for (let i = 0; i < numeri.length; i++) {

    calorie += (numeri[i] * 1);
    if (numeri[i] === '') {
        calorieTot.push(calorie);
        if (calorie > calorieOne) {
            calorieOne = calorie;
        }
        calorie = 0;
    }
}

console.log(calorieOne);

calorieTwo = 0;
calorieThree = 0;

for (let i = 0; i < calorieTot.length; i++) {
    if (calorieTot[i] > calorieTwo && calorieTot[i] < calorieOne) {
        calorieTwo = calorieTot[i];
    }
}

for (let i = 0; i < calorieTot.length; i++) {
    if (calorieTot[i] > calorieThree && calorieTot[i] < calorieTwo) {
        calorieThree = calorieTot[i];
    }
}

calorieTopThree = calorieOne + calorieTwo + calorieThree;

console.log(calorieTopThree);