// Max number from array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numbers.reduce((acc, curr) => Math.max(acc, curr));

console.log(newArr);
