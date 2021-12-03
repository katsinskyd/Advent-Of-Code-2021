const fs = require('fs')
const text = fs.readFileSync("./day1input.txt", 'utf-8')
const input = text.split('')

let counter = 0;

function toBasement(input) {
    for (let i = 0; i < input.length; i++) {
        if (counter === -1) {
            return i;
        } else {
            if (input[i] === '(') {
                counter++;
            } else {
                counter--;
            }
        }
    }
}

console.log(input.length)
console.log(toBasement(input));