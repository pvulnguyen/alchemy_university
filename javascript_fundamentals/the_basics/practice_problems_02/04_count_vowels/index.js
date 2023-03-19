/*
 *
 * Count Vowels
 *
 * Write a function countVowels that takes in a string and counts how many
 * vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".
 *
 * Handle lowercase and uppercase vowels.
 */

const lower = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
    let count = 0;

    const arr = Array.from(str);
    arr.forEach((char) => {
        for (let i = 0; i < lower.length; i++) {
            if (char === lower[i] || char.toUpperCase() === lower[i].toUpperCase()) {
                count++;
            }
        }
    });

    return count;
}

module.exports = countVowels;
