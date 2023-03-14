/*
 *
 * 1. The function checkNumber takes a single argument: a number num
 * 2. The function should return the string positive if the number is positive, 
 *    negative if the number is negative, and zero if the number is zero.
 */

function checkNumber(num) {
    const positive = 'positive';
    const negative = 'negative';
    const zero = 'zero';

    if (num < 0) {
        return negative;
    }

    if (num === 0) {
        return zero;
    }

    if (num > 0) {
        return positive;
    }
}

module.exports = checkNumber;
