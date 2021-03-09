const calculation = require('./models/calculation');
const statCalc = require('./statistics/statCalc.js');
const calculator = require('./calculator.js');

class statistics extends calculator {
    static mean(numbers){
        let Calculation = this.create(statCalc.mean,{numbers});
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static median(numbers){
        let Calculation = this.create(statCalc.median,{numbers});
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static quartile(numbers){
        let Calculation = this.create(statCalc.quartile,{numbers});
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }

    static variance(numbers){
        let Calculation = this.create(statCalc.variance,{numbers});
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static standardDev(numbers){
        let Calculation = this.create(statCalc.standardDev,{numbers});
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }
    static skewness(numbers){
        let Calculation = this.create(statCalc.skewness,{numbers});
        calculator.calculations.push(calculation);
        return Calculation.getResults();
    }

}