const fs = require('fs')
const text = fs.readFileSync("./day1input.txt", 'utf-8')
const textByLine = text.split('\n')

const nums = textByLine.map(x => Number(x));

// function countIncrease(array) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i+1] > array[i]) {
//             counter++
//         }
//     }
//     return counter
// }

// console.log(countIncrease(nums))

let windows = {};
let firstProperty = 0;

while (firstProperty < nums.length) {
    windows[firstProperty] = []
    windows[firstProperty].push(nums[firstProperty], nums[firstProperty+1], nums[firstProperty+2])
    firstProperty++
}

function totalArray(arr) {
    const sum = arr.reduce(add, 0);

    function add(accumulator, a) {
    return accumulator + a;
    }

    return sum
}

let totaledArrays = [];

for (array in windows) {
    if (!windows[array].includes(undefined)) {
        totaledArrays.push(totalArray(windows[array]))
    }
}

let counter = 0;

for (let i = 0; i < totaledArrays.length; i++) {
    if (totaledArrays[i] < totaledArrays[i+1]) {
        counter++
    }
}

console.log(counter)