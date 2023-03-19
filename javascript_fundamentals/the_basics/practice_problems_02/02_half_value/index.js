/*
 *
 * Half Value
 *
 * The function halfValue takes an array of numbers. It should return a new
 * array with all the original values halved.
 *
 * Odd numbers should be rounded up to the nearest whole number.
 */

function halfValue(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            result.push(numbers[i] / 2);
        } else {
            result.push(Math.round(numbers[i] / 2));
        }
    }

    return result;
}

module.exports = halfValue;
