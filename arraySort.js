const arrText = ['asap', 'byob', 'rofl', 'gtfo'];
const arrNums = [11, 2, 32, 4, 5, 6, 27, 8, 95, 10];

// factory function to return a numerical array sort, direciton based, function
function makeSortedFunc(direction) {
    return function (arr) {
        if (direction === 'asc') {
            return arr.sort((a, b) => a - b);
        } else {
            return arr.sort((a, b) => b - a);
        }
    };
}

// create new functions
const sortAsc = makeSortedFunc('asc');
const sortDesc = makeSortedFunc('desc');

console.log(sortAsc(arrNums));
console.log(sortDesc(arrNums));

// ASCENDING SORT
arrNums.sort((a, b) => a - b);

// DESCENDING SORT
arrNums.sort((a, b) => b - a);

console.log(arrNums);
