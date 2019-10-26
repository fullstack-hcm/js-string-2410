/**
 * substring, substr, slice
 */

let str = 'mern stack 2410';

console.log(str.length);
let substringStr = str.substring(5, 10)
console.log(substringStr);

let substrStr = str.substr(5, 5)
console.log(substrStr);

let sliceStr = str.slice(5, 10)
console.log(sliceStr);

/**
 * substring
 * nếu là số âm: 0
 * nếu end < start: swap
 */

let substringStr2 = str.substring(10, 5) // 10, 0 // 0, 10
console.log(substringStr2);

/**
 * slice
 * nếu end < start: ''
 * end là số âm: length - Math.abs(end)
 */
let sliceStr2 = str.slice(5, -5) //5, 15-|-5| // 5, 10
console.log(sliceStr2);