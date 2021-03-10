const quartile = (numbers, q) => {
    const sorted = numbers.sort();
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};
module.exports = quartile
// console.log(quartile([1,12,2,3,41,4,11,2,1], .25));