/**
 * Count number of word in sentence
 * 
 * @param {string} str 
 * @returns 
 */
function wordsCount(str) {
    return str.split(' ').length;
}

console.assert(wordsCount('Hello world!') === 2)
console.assert(wordsCount('Hello world Eweryone!') === 3)
