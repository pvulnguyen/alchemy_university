const { sha256 } = require('ethereum-cryptography/sha256');
const { toHex, utf8ToBytes } = require('ethereum-cryptography/utils');

/*
 *
 * Brute Force Hashing
 * 
 * Given a SHA256 hash, find the color input that would generate that hash.
 * You can assume that all the hashes be generated only from colors provided 
 * in the `COLORS` array.
 * 
 * 1. To take the hash of a color, translate the string to bytes with 
 *    `utf8ToBytes` before hashing it with `sha256`.
 * 
 * 2. To compare hashes, use the `toHex` function to convert the `Uint8Array` 
 *    into a string of hexadecimal characters.
 */

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {

    for (let i = 0; i < COLORS.length; i++) {
        const elementToByte = utf8ToBytes(COLORS[i]);
        const hashedByte = sha256(elementToByte);

        if (toHex(hashedByte) === toHex(hash)) {
            return COLORS[i];
        }
    }
}

module.exports = findColor;
