const secp = require('ethereum-cryptography/secp256k1');
const hashMessage = require('./hashMessage');

/*
 *
 * Recover the Public Key
 *
 * 1. Given a message, signature, and recoveryBit find the public key and return it!
 *    Be sure to hash the message when passing it to the recovery method.
 */

async function recoverKey(message, signature, recoveryBit) {
    return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
}

module.exports = recoverKey;
