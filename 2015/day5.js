const fs = require('fs');
const text = fs.readFileSync("./day5input.txt", 'utf-8')
const strings = text.split('\n')

function checkVowels(string) {
    let vowelCounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'i' || string[i] === 'u' || string[i] === 'e' || string[i] === 'o') {
            vowelCounter++;
        }
    }
    return vowelCounter;
}

function checkTwice(string) {
    let doubleLetter = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i+1]) {
            doubleLetter = true;
        }
    }
    return doubleLetter;
}

function checkBadStrings(string) {
    if (string.includes('ab') || string.includes('cd') || string.includes('pq') || string.includes('xy')) {
        return true
    } else {
        return false
    }
}

function checkString(string) {
    if (checkBadStrings(string) === true) {
        return false
    } else if (checkTwice(string) === false) {
        return false
    }  else if (checkVowels(string) < 3) {
        return false
    } else {
        return true
    }
}

let niceCounter = 0;

for (let i = 0; i < strings.length; i++) {
    if (checkString(strings[i]) === true) {
        niceCounter++
    }
}

console.log(niceCounter)