// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    };
    return sum;
};

// console.log(positiveSum([-1, 2, 3, 4, -5]));

function positiveSum1(arr) {
    return arr.reduce(function (a, b) {
        if (b > 0) {
            a += b;
        }
        return a;
    })
}
console.log(positiveSum1([1,2,3,-8]));