const removeFromArray = function(array, ...Args) {
    for (let i = 0; ((i < array.length) && (i >= 0)); i++) {
        for (let a = 0 ; a < Args.length; a++) {
            if (array[i] === Args[a]) {
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
