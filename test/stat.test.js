const mean = require('../src/statistics/mean.js')

test('get mean of an array', ()=>{
    expect(mean([1,2,3,3,3,4,5,6,7,8,9,10])).toBe(5.083333333333333)})