const fs = require('fs')
const text = fs.readFileSync("./day3input.txt", 'utf-8')
const input = text.split('')

let x = 0;
let y = 0;
let x2 = 0;
let y2 = 0;

let houseCounter = 0;

let locations = {
    '0 0': ['present']
};

for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
        //robosanta
        if (input[i] === '^') {
            y2++;
        } else if (input[i] === 'v') {
            y2--;
        } else if (input[i] === '>') {
            x2++;
        } else if (input[i] === '<') {
            x2--;
        }

        if (locations[`${x2} ${y2}`] === undefined) {
            locations[`${x2} ${y2}`] = ['present']
        } else {
            locations[`${x2} ${y2}`].push('present')
        }

    } else {
        //santa
        if (input[i] === '^') {
            y++;
        } else if (input[i] === 'v') {
            y--;
        } else if (input[i] === '>') {
            x++;
        } else if (input[i] === '<') {
            x--;
        }

        if (locations[`${x} ${y}`] === undefined) {
            locations[`${x} ${y}`] = ['present']
        } else {
            locations[`${x} ${y}`].push('present')
        }
    }
}

for (house in locations) {
    if (house.length > 1) {
        houseCounter++
    }
}

console.log(houseCounter)