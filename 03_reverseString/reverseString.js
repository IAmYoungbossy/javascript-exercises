const reverseString = function(string) {
    let splitString = string.split("");
    let stringReverse = splitString.reverse();
    let stringJoin = stringReverse.join("");
    return stringJoin;
};

// Do not edit below this line
module.exports = reverseString;
