/*
 * Character Casing
 *
 * Let's update our startsWithX function to return true
 * for an upper-case X as well as a lower-case x.
 */

function startsWithX(string) {
    let firstChar = string.charAt(0);
    if (firstChar === 'x' || firstChar === 'X') {
        return true;
    }

    return false;
}

module.exports = startsWithX;
