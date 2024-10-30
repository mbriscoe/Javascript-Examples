// SHORT WAY
function fizzBuzzShort(num) {
    let fizz = num % 3 ? '' : 'Fizz';
    let buzz = num % 5 ? '' : 'Buzz';
    return fizz.concat(buzz).length ? fizz.concat(buzz) : num.toString();
}

for (let i = 1; i <= 30; i++) {
    console.log(fizzBuzzShort(i));
}

// LONG WAY
function fizzBuzzLong(num) {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

for (let i = 1; i <= 30; i++) {
    console.log(fizzBuzzLong(i));
}
