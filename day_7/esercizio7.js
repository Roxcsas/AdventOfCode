let input = ``;

let three = input.split("\n");

console.log(three);

let directories = [];
let currentFolder = directories;


for (let i = 0; i < three.length; i++) {

    let command = three[i];
    let currentIndex = 0;

    console.log("command " + command);

    if (command.includes("$ cd /")) {
        currentFolder = directories;
    }

    else if (command.includes("$ ls")) {
        currentFolder = createNewDimensionArray(currentFolder, currentIndex);
    }

    else if (command.includes("$ cd ..") || command.includes("$ cd")) {
        currentFolder = switchFolder(currentFolder, command);
    }

    else {
        checkCommand(directories, currentIndex, command);
    }

    console.log(directories);

    if (i == 10) {
        break;
    }

    // 123 abc file named abc with size 123

}

function switchFolder(array, command) {
    console.log("switchFolder " + array + " " + command);

    if (command === "$ cd") {
        return index++;
    }
    else if (command === "$ cd ..") {
        return index--;
    }
    return index;
}

function checkCommand(array, currentIndex, command) {
    console.log("checkCommand " + array + " " + currentIndex + " " + command);
    if (command === "$ ls") {
        if (!array[currentIndex]) {
            createNewDimensionArray(array, currentIndex);
        }
    }
    else if (command.includes("dir ")) {
        makeFolder(array, retrieveFolderNameFromComand(command));
    }
}

function makeFolder(array, folderName) {
    console.log("makeFolder " + array + " " + folderName);
    if (!array.find(item => item === folderName)) {
        array.push(folderName);
    }
}

function retrieveFolderNameFromComand(command) {
    console.log("retrieveFolderNameFromComand" + " " + command);
    return command.substring(3);
}

function createNewDimensionArray(array, currentIndex) {
    console.log("createNewDimensionArray" + " " + array + " " + currentIndex);
    return array[currentIndex] = [];
}


console.log(JSON.stringify(directories));