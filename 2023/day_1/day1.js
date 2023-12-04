let myInput = ``;

myInput = myInput.split("\n");

let finalCalibration = 0;

for (let x of myInput) {
    myArray = [];
    
    for (let y = 0; y < x.length; y++) {
        if (!isNaN(x[y])) {
            myArray[y] = x[y];
        }
    }
    let number1 = myArray.find(el => el !== undefined);
    let number2 =  myArray.reverse().find(el => el !== undefined);
    if(!number2){
        number2 = number1;
    }
    number1 += number2;
    finalCalibration += (number1 * 1);
}

console.log(finalCalibration);

let finalTwo = 0;

for (let x of myInput) {
    myArray = [];

    for (let y = 0; y < x.length; y++) {
        if (!isNaN(x[y])) {
            myArray[y] = x[y];
        }
    }
    if(x.indexOf("one") !== -1){
        myArray[x.indexOf("one")] = '1';
    }
    if(x.indexOf("two") !== -1){
        myArray[x.indexOf("two")] = '2';
    }
    if(x.indexOf("three") !== -1){
        myArray[x.indexOf("three")] = '3';
    }
    if(x.indexOf("four") !== -1){
        myArray[x.indexOf("four")] = '4';
    }
    if(x.indexOf("five") !== -1){
        myArray[x.indexOf("five")] = '5';
    }
    if(x.indexOf("six") !== -1){
        myArray[x.indexOf("six")] = '6';
    }
    if(x.indexOf("seven") !== -1){
        myArray[x.indexOf("seven")] = '7';
    }
    if(x.indexOf("eight") !== -1){
        myArray[x.indexOf("eight")] = '8';
    }
    if(x.indexOf("nine") !== -1){
        myArray[x.indexOf("nine")] = '9';
    }

    if(x.lastIndexOf("one") !== -1){
        myArray[x.lastIndexOf("one")] = '1';
    }
    if(x.lastIndexOf("two") !== -1){
        myArray[x.lastIndexOf("two")] = '2';
    }
    if(x.lastIndexOf("three") !== -1){
        myArray[x.lastIndexOf("three")] = '3';
    }
    if(x.lastIndexOf("four") !== -1){
        myArray[x.lastIndexOf("four")] = '4';
    }
    if(x.lastIndexOf("five") !== -1){
        myArray[x.lastIndexOf("five")] = '5';
    }
    if(x.lastIndexOf("six") !== -1){
        myArray[x.lastIndexOf("six")] = '6';
    }
    if(x.lastIndexOf("seven") !== -1){
        myArray[x.lastIndexOf("seven")] = '7';
    }
    if(x.lastIndexOf("eight") !== -1){
        myArray[x.lastIndexOf("eight")] = '8';
    }
    if(x.lastIndexOf("nine") !== -1){
        myArray[x.lastIndexOf("nine")] = '9';
    }
    let number1 = myArray.find(el => el !== undefined);
    let number2 =  myArray.reverse().find(el => el !== undefined);
    if (!number2) {
        number2 = number1;
    }
    number1 += number2;
    finalTwo += (number1 * 1);
}

console.log(finalTwo);