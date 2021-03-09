const mean = require('./mean.js');
const standardDev = require('./standard-dev.js');

function skewness(numbers) {
    let beea = mean(numbers);
    let dev =  numbers.reduce((a, b) => a + (b-beea) ** 3, 0);
    let standardDeeee = standardDev(numbers);

    return (dev/numbers.length) / (standardDeeee ** 3);

}

module.exports = skewness

// console.log(skewness([12,312,34,5,67,82,1], .5));

