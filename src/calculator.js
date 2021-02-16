const calculation=require('./models/calculation');
const add=require('./operations/add');
const subtract=require('./operations/subtract');
const multiply=require('./operations/multiply');
const divide=require('./operations/divide');
const square=require('./operations/square');
const squareroot=require('./operations/squareroot');

class calculator {
    static calculations= []
    static add(a,b){
        let Calculation = new calculation(a,b,add);
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static subtract(a,b){
        let Calculation = new calculation(a,b,subtract);
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static multiply(a,b){
        let Calculation = new calculation(a,b,multiply);
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static divide(a,b){
        let Calculation = new calculation(a,b,divide);
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static square(a,b){
        let Calculation = new calculation(a,b,square);
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static squareroot(a,b){
        let Calculation = new calculation(a,b,squareroot);
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
}
module.exports=calculator;