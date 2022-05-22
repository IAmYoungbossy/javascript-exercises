const getTheTitles = function(book) {
    const title = book.map(book => {
        return [book.title].join();
    });
    return title
};

// Do not edit below this line
module.exports = getTheTitles;
