// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

function findSmallestInt(args) {
    let small = args[0];
    for (let i = 0; i < args.length; i++) {
        i
        function findSmallestInt2(args) {
            if (args[i] < small) {
                small = args[i];
            }
        }
        return small;
    };
}

function findSmallestInt2(args) {
    return args.sort(function (a, b) {
        return a - b;
    })[0];
};

function findSmallestInt3(args) {
    return Math.min(...args);
}

console.log(findSmallestInt3([78, 56, 232, 12, 8]));
