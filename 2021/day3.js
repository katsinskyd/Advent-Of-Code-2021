const fs = require('fs')
const text = fs.readFileSync("./day3input.txt", 'utf-8')
let textByLine = text.split('\n')

// let commonBits = [];

// for (let i = 0; i < textByLine[0].length; i++) {
//     commonBits.push(0);
// }

// function findCommon(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "0") {
//             commonBits[i]--;
//         } else {
//             commonBits[i]++;
//         }
//     }
// }

// textByLine.forEach(line => findCommon(line))

// for (let i = 0; i < commonBits.length; i++) {
//     if (commonBits[i] < 0) {
//         commonBits[i] = 0;
//     } else {
//         commonBits[i] = 1
//     }
// }

// console.log(commonBits)

// console.log(217*3878)

let ones = [];
let zeroes = [];

function findBit(string, position) {
    if (string[position] === '1') {
        ones.push(string)
    } else {
        zeroes.push(string)
    }
}

for (let i = 0; i < 13; i++) {
    textByLine.forEach(line => findBit(line, i))

    if (!(textByLine.length === 1)) {
        if (zeroes.length <= ones.length) {
            textByLine = zeroes;
        } else {
            textByLine = ones;
        }
        
        ones = [];
        zeroes = [];
    } else {
        console.log(textByLine)
    }
}

// it is not 3434486 or 101750
// binary is not 1177 or 4070 or 25 wait oh goddammit

// 010010011001 * 111111100110

console.log(1177 * 4070)