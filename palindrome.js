function palindrome(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return 'is not a palindrome';
        }
    }
    return 'is a palindrome';
}

console.log(`racecar ${palindrome('racecar')}`);
console.log(`racetrack ${palindrome('racetrack')}`);
