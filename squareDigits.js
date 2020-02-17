// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
  var n = num.toString().split('').map(function(x){
    return Number(x) * Number(x);
  });
  return(Number(n.join('')));
}

console.log(squareDigits(9119));