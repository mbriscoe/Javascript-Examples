console.clear();

const arrText = ['asap', 'byob', 'rofl', 'gtfo'];
const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrCaptext = [];

// take array and return an array of objects
const arrNumObjs = arrNums.map(function (num) {
    return {
        num: num,
        isEven: num % 2 === 0,
    };
});
console.log(arrNumObjs);

// capitalise and punctuate abbreviations
const abbr = arrText.map(function (word) {
    return word.toUpperCase().split('').join('.');
});
console.log(abbr);

//capitalise text in an array
arrCaptext = arrText.map(function (letter) {
    return letter.toUpperCase();
});
console.log(arrCaptext);

// sum elements of an array
let total = 0;
arrNums.forEach(function (num) {
    total += num;
});
console.log(total);
