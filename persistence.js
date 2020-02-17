// Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let i = 0;
    while(num > 9){
        i++;
        num = num.toString().split('').reduce(function (acc, cur) {
            return acc * cur;
        });
    }
    return i;
 }

console.log( persistence(39) );
