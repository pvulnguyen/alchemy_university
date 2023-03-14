/*
 *
 * Running Value
 *
 * Given an array, find the sum of all even values inside the array and return it.
 */

function sumEven(array) {
    let sumOfAllEvenNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i])) {
            sumOfAllEvenNumbers += array[i];
        }
    }

    return sumOfAllEvenNumbers;
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }

    return false;
}

module.exports = sumEven;
