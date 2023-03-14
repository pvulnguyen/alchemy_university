/*
 *
 * Slicing Strings
 *
 * Let's find the longer half of the string before and after the x!
 *
 * 1. First, you'll need to find the lower-case x.
 * 2. Once you've found the x, split the string in half. The first half will be
 *    the string before the x, the second half will be the string after the x.
 * 3. Take the longer string and return it!
 */

function splitAtX(string) {
    const indexOfX = string.indexOf('x');
    const firstHalf = string.slice(0, indexOfX);
    const secondHalf = string.slice(indexOfX + 1, string.length);
    if (firstHalf.length > secondHalf.length) {
        return firstHalf;
    }

    return secondHalf;
}

module.exports = splitAtX;
