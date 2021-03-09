function mean(numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return (total / numbers.length);
}
module.exports = mean
// console.log(mean([1,2,3,3,3,4,5,6,7,8,9,10]));