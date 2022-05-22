const sumAll = function(numb1, numb2) {
    let bigNumber;
    let smallNumber;
    let sumNumber = 0
    if (numb2 < 0 || numb1 < 0) {
        sumNumber = 'ERROR';
    } else if (typeof numb1 === 'string' || typeof numb2 === 'string') {
        sumNumber = 'ERROR';
    } else if (numb1 > numb2) {
        bigNumber = numb1;
        smallNumber = numb2;
    } else if (numb2 > numb1) {
        bigNumber = numb2;
        smallNumber = numb1;
    } else {
        sumNumber = 'ERROR';
    }

    for (let i = smallNumber; i <= bigNumber; i++) {
        sumNumber+= i;
    }
    return sumNumber;
}


// Do not edit below this line
module.exports = sumAll;
