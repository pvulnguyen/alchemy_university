/*
 *
 * Modifying the Array
 *
 * Given an `array` of integers and a number, `num`, find all the occurrences
 * of the number and remove it from the array. Modify the array directly and
 * do not return anything from this function.
 */

function removeOccurrences(array, num) {
    while (array.includes(num)) {
        array.splice(array.indexOf(num), 1);
    }
}

module.exports = removeOccurrences;
