const fs = require('fs')
const text = fs.readFileSync("./day2input.txt", 'utf-8')
const textByLine = text.split('\n')

let splitArrays = [];
textByLine.forEach(array => splitArrays.push(array.split(' ')))

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

function followDirections(array) {
    if (array.includes("forward")) {
        horizontalPosition += Number(array[1]);
        depth += aim * Number(array[1]);
    } else if (array.includes("down")) {
        aim += Number(array[1]);
    } else if (array.includes("up")) {
        aim -= Number(array[1]);
    }
}

splitArrays.forEach(array => followDirections(array))

console.log(horizontalPosition*depth)