module.exports = class statCalc{

    static mean(numbers) {
        var total = 0, i;
        for (i = 0; i < numbers.length; i += 1) {
            total += numbers[i];
        }
        return (total / numbers.length);
    }

    static median(numbers){
        // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
        var median = 0, numsLen = numbers.length;
        numbers.sort();

        if (
            numsLen % 2 === 0 // is even
        ) {
            // average of two middle numbers
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else { // is odd
            // middle number only
            median = numbers[(numsLen - 1) / 2];
        }

        return console.log(median);
    }

    static mode(numbers) {
        // as result can be bimodal or multi-modal,
        // the returned result is provided as an array
        // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        return modes;
    }

    static quartile = (numbers, q) => {
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

    static variance(numbers)
    {
        var len = 0;
        var sum=0;
        for(var i=0;i<numbers.length;i++)
        {
            if (numbers[i] == ""){}
            else
            {
                len = len + 1;
                sum = sum + parseFloat(numbers[i]);
            }
        }
        var v = 0;
        if (len > 1)
        {
            var mean = sum / len;
            for(var i=0;i<numbers.length;i++)
            {
                if (numbers[i] == ""){}
                else { v = v + (numbers[i] - mean) * (numbers[i] - mean); }
            }
            return v / len;
        }
        else { return 0; }
    }

    static standardDev(numbers) {
        const sd = Math.sqrt(statCalc.variance(numbers));

        return sd

    }

    static skewness(numbers) {
        let beea = statCalc.mean(numbers);
        let dev =  numbers.reduce((a, b) => a + (b-beea) ** 3, 0);
        let standardDeeee = statCalc.standardDev(numbers);

        return (dev/numbers.length) / (standardDeeee ** 3);

    }

}

