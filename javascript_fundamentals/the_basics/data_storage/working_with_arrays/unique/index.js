/*
 *
 * Returning a New Array
 *
 * Write a function that will take an array of numbers and
 * return a new array that only contains unique numbers.
 */

function unique(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}

module.exports = unique;
