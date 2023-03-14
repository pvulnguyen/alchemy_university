/*
 * Looking up Characters
 *
 * 1. Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
 * 2. If the first character is x return true. If not, return false.
 */

function startsWithX(string) {
    let firstChar = string.charAt(0);
    if (firstChar === 'x' || firstChar === 'X') {
        return true;
    }

    return false;
}

module.exports = startsWithX;
