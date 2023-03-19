/*
 * 
 * Player Hand Score
 * 
 * The function playerHandScore that takes in a string of face cards (Jack, 
 * Queen, and King only) and returns the total score of the players hand.
 * 
 * The cards are represented by the first letter in the name of the card:
 * A "K" is 4 points
 * A "Q" is 3 points
 * A "J" is 2 points
 */

function playerHandScore(hand) {
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand.charAt(i) === 'K') {
            score += 4;
        }
        if (hand.charAt(i) === 'Q') {
            score += 3;
        }
        if (hand.charAt(i) === 'J') {
            score += 2;
        }
    }

    return score;
}

module.exports = playerHandScore;
