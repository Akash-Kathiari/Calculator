const calculator=require('../src/calculator');
const calculation=require('../src/models/calculation');

test('Calculator adding two numbers', ()=>{
    let result= calculator.add(1,2);
    expect(result).toBe(3);
});
test('Calculator subtracts two numbers', ()=>{
    let result= calculator.subtract(1,2);
    expect(result).toBe(-1);
});
test('Calculator multiply two numbers', ()=>{
    let result= calculator.multiply(1,2);
    expect(result).toBe(2);
});
test('Calculator divide two numbers', ()=>{
    let result= calculator.divide(1,2);
    expect(result).toBe(.5);
});
test('Calculator square a number', ()=>{
    let result= calculator.square(1,1);
    expect(result).toBe(1);
});
test('Calculator squareroot a number', ()=>{
    let result= calculator.squareroot(1,1);
    expect(result).toBe(.5);
});