const palindromes = function (palindrome) {
    let forward = palindrome.replace(/\s|!|,|\./gi, '').toLowerCase();
    let reverse = forward.split('').reverse().join('');
    return forward === reverse ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
