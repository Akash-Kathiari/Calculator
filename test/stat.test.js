const mean = require('../src/statistics/mean.js')
const median = require('../src/statistics/median.js')
const mode = require('../src/statistics/mode.js')
const quartile = require('../src/statistics/quartile.js')
const standardDev = require('../src/statistics/standard-dev.js')
const skewness = require('../src/statistics/skewness.js')

test('get mean of an array', ()=>{
    expect(mean([1,2,3,3,3,4,5,6,7,8,9,10])).toBe(5.083333333333333)})

test('get mean of an array', ()=>{
    expect(median([1,2,3,3,3,4,5,6,7,8,9,10])).toBe(3.5)})

test('get mean of an array', ()=>{
    expect(mode([1,2,3,3,3,4,5,6,7,8,9,10])).toStrictEqual([3])})

test('get mean of an array', ()=>{
    expect(quartile([1,12,2,3,41,4,11,2,1], .25)).toBe(11)})

test('get mean of an array', ()=>{
    expect(standardDev([1,2,3,3,3,4,5,6,7,8,9,10])).toBe(2.782634642844)})

test('get mean of an array', ()=>{
    expect(skewness([12,312,34,5,67,82,1], .5)).toBe(1.717486943872699)})