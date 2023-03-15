const { keccak256 } = require('ethereum-cryptography/keccak');
const { utf8ToBytes } = require('ethereum-cryptography/utils');

/*
 *
 * Hashing Messages
 *
 * 1. Your first step is to take the string message passed in and turn it into
 *    an array of UTF-8 bytes. You can do so with the utf8ToBytes function.
 *
 * 2. Then take the keccak256 hash of those bytes and return this value.
 */

function getAddress(publicKey) {
    const messageInBytes = utf8ToBytes(message);

    return keccak256(messageInBytes);
}

module.exports = getAddress;
