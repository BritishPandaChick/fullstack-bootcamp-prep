
function sumMultiplyAndRound(num1, num2, num3) {
  var sum = Math.floor(num1 + num2);
  var product = Math.round(sum * num3);

  return Math.ceil(product);
}








//EXAMPLE TESTS

console.log(sumMultiplyAndRound(2, 3.5, 6.2))
//OUTPUT: 31
