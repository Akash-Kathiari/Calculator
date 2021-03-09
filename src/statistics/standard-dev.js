const variance = require('./variance.js');

    //Standard deviation
    function standardDev(numbers) {
        const sd = Math.sqrt(variance(numbers));

        return sd

    }

module.exports = standardDev
// console.log(standardDev([1,2,3,3,3,4,5,6,7,8,9,10]));