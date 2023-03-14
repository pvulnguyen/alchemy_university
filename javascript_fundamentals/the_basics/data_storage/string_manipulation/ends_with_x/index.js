/*
 *
 * String Length
 *
 * Complete the `endsWithX` function by detecting if the last character in the
 * string is a lower-case `x` or an upper-case `X`. Return `true` if it is, `false` if not.
 */

function endsWithX(string) {
    const lastCharacter = string.charAt(string.length - 1);
    if (lastCharacter === 'x' || lastCharacter === 'X') {
        return true;
    }

    return false;
}

module.exports = endsWithX;
