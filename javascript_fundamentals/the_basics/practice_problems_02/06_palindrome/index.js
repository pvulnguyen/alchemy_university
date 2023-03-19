/*
 *
 * Palindrome
 *
 * Write a function `isPalindrome` that takes a word `string` and returns `true` if
 * the word is a palindrome or `false` if it is not.
 *
 * A palindrome is a word that is spelled the same forwards as it is backwards.
 */

function isPalindrome(string) {
    
    if (string.length === 3 && string.charAt(0) === string.charAt(2)) {
        return true;
    }

    for (let i = 0; i < string.length; i++) {

        for (let j = string.length - 1; j > 0; j--) {
            if (string.charAt(i) !== string.charAt(j)) {
                return false;
            }

            return true;
        }
    }
}

module.exports = isPalindrome;
