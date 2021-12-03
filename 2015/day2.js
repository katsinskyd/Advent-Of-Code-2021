const fs = require('fs');
const text = fs.readFileSync("./day2input.txt", 'utf-8')
const textByLine = text.split('\n')

let splitArrays = [];
textByLine.forEach(array => splitArrays.push(array.split('x')))

// function getBoxArea(l, w, h) {
//     let boxArea = (2*l*w) + (2*w*h) + (2*h*l);
//     return boxArea;
// }

// function getSmallestSide(l, w, h) {
//     let side1 = l*w;
//     let side2 = w*h;
//     let side3 = h*l;

//     let sides = [side1, side2, side3]

//     sides.sort(function(a, b) {
//         return a - b;
//       });

//     return sides[0];
// }

// let grandTotal = 0;

// for (let i = 0; i < splitArrays.length - 1; i++) {
//     let thisBoxArea = getBoxArea(Number(splitArrays[i][0]), Number(splitArrays[i][1]), Number(splitArrays[i][2]));
//     let thisSmallestSide = getSmallestSide(Number(splitArrays[i][0]), Number(splitArrays[i][1]), Number(splitArrays[i][2]));
//     grandTotal += thisBoxArea + thisSmallestSide;
// }

// console.log(grandTotal);

function findWrappingLength(l, w, h) {
let sides = [l, w, h]

    sides.sort(function(a, b) {
        return a - b;
      });

    return sides[0]*2 + sides[1]*2 + l*w*h
}

let totalRibbon = 0;

for (let i = 0; i < splitArrays.length - 1; i++) {
    totalRibbon += findWrappingLength(Number(splitArrays[i][0]), Number(splitArrays[i][1]), Number(splitArrays[i][2]));
}

console.log(totalRibbon)