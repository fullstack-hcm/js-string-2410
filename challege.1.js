/**
 * replaceAll
 */
let temp = 'mern stack mern2410';

let replaceAll = (str, keyOld, keyNew) => {
    let result = str;
    while(result.indexOf(keyOld) !== -1) { //while(result.includes(keyOld)) {
        result = result.replace(keyOld, keyNew);
    }
    return result;
}
console.log(replaceAll(temp, 'mern', 'FULL'))
