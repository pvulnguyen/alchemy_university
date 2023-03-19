/*
 *
 * Reverse the String
 *
 * Write a function reverse that takes a string as an argument and returns a
 * string with all the letters reversed.
 */

function reverse(string) {
    const arr = new Array();

    for (let i = string.length - 1;  i >= 0; i--) {
        arr.push(string.charAt(i));
    }

    return arr.join('');
}

module.exports = reverse;
