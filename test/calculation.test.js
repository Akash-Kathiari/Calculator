const calculation=require('../src/models/calculation');
const add=require('../src/operations/add');
const subtract=require('../src/operations/subtract');
const multiply=require('../src/operations/multiply');
const divide=require('../src/operations/divide');
const square=require('../src/operations/square');
const squareroot=require('../src/operations/squareroot');

test('Test of Calculation Instantiation', () => {
    //Test the instantiation of the calculation object
    let op = add
    let Calculation = new calculation(1,2,op);
    expect(Calculation.a).toBe(1);
    expect(Calculation.b).toBe(2);
    expect(Calculation.op).toBe(op);
});
test('Test Get results for add function', () => {
    //Test the get results function
    let op = add;
    let Calculation = new calculation(1,2,op);
    expect(Calculation.getResults()).toBe(3);
});
test('Test Get results for subtract function', () => {
    //Test the get results function
    let op = subtract;
    let Calculation = new calculation(1,2,op);
    expect(Calculation.getResults()).toBe(-1);
});
test('Test Get results for multiply function', () => {
    //Test the get results function
    let op = multiply;
    let Calculation = new calculation(1,2,op);
    expect(Calculation.getResults()).toBe(2);
});
test('Test Get results for divide function', () => {
    //Test the get results function
    let op = divide;
    let Calculation = new calculation(1,2,op);
    expect(Calculation.getResults()).toBe(.5);
});
test('Test Get results for square function', () => {
    //Test the get results function
    let op = square;
    let Calculation = new calculation(1,1,op);
    expect(Calculation.getResults()).toBe(1);
});
test('Test Get results for squareroot function', () => {
    //Test the get results function
    let op = squareroot;
    let Calculation = new calculation(1,1,op);
    expect(Calculation.getResults()).toBe(.5);
});