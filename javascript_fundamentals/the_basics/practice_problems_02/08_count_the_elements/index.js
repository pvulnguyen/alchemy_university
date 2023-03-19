/*
 *
 * Count the Elements
 *
 * Write a function `countElements` that takes in an array and returns an
 * object a count of each element in the array.
 */

function countElements(elements) {
    const result = {};

    for (let element of elements) {
        if (result[element]) {
            result[element]++;
        } else {
            result[element] = 1;
        }
    }

    return result;
}

module.exports = countElements;
