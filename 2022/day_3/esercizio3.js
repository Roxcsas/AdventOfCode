let borsa = ``;

borsa = borsa.split("\n");

priorityTot = 0;

priorityTotBadges = 0;

//cicla l'input
for (let i = 0; i < borsa.length; i++) {
    //divide e cicla la stringa in 2 substring
    let itemBorsaUno = borsa[i].substring(0, borsa[i].length / 2);
    let itemBorsaDue = borsa[i].substring(borsa[i].length / 2);

    let commonItems = checkCommon(itemBorsaUno, itemBorsaDue);

    for (let i in commonItems) {
        priorityTot += checkValue(commonItems[i]);
    }

}

//valore char unicode
function checkValue(item) {
    let charValue = item.charCodeAt(0);
    if (charValue >= 97 && charValue <= 122) {
        return charValue - 96
    }
    else if (charValue >= 65 && charValue <= 90) {
        return charValue - 38
    }
}

//ritorna una stringa con le lettere in comune tra due stringhe
function checkCommon(string1, string2) {
    const commons = (string1.split("").filter(value => string2.split("").includes(value)));
    let filtered = new Set();
    for (let i in commons) {
        filtered.add(commons[i]);
    }
    let filteredArray = Array.from(filtered);
    return filteredArray;
}

console.log(priorityTot);

//cicla l'input
for (let i = 0; i < borsa.length - 2; i += 3) {

    let itemElfoUno = borsa[i].substring();
    let itemElfoDue = borsa[i + 1].substring();
    let itemElfoTre = borsa[i + 2].substring();

    let badges = checkCommonPartTwo(itemElfoUno, itemElfoDue, itemElfoTre);

    for (let i in badges) {
        priorityTotBadges += checkValue(badges[i]);
    }
}

console.log(priorityTotBadges);

//ritorna una stringa con le lettere in comune tra tre stringhe
function checkCommonPartTwo(string1, string2, string3) {
    const commonsUnoDue = (string1.split("").filter(value => string2.split("").includes(value)));
    const commonsTot = (commonsUnoDue.filter(value => string3.split("").includes(value)));

    let filtered = new Set();
    for (let i in commonsTot) {
        filtered.add(commonsTot[i]);
    }
    let filteredArray = Array.from(filtered);
    return filteredArray;
}