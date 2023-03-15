const secp = require('ethereum-cryptography/secp256k1');
const hashMessage = require('./hashMessage');

/*
 *
 * Signing the Hash
 *
 * Hash the message with the function created in the previous exercise and sign
 * it using the `secp.sign` function.
 */

/* Never use this specific key because it is published on the internet, so many 
   people including yourself could authenticate with this specific private key. */
const PRIVATE_KEY = '6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e';

async function signMessage(msg) {
    const hashedMessage = hashMessage(msg);
    const signed = secp.sign(hashedMessage, PRIVATE_KEY, { recovered: true });

    return signed;
}

module.exports = signMessage;
