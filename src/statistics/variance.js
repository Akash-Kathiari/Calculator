function variance(numbers)
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

module.exports = variance
// console.log(standardDev([1,2,3,3,3,4,5,6,7,8,9,10]));