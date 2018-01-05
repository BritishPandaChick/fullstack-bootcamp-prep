function factorial (num) {
  var total= 1;
  for (num; num > 0; num--) {
    total *= num;
  }
  return total;
}









//EXAMPLE TESTS

console.log(factorial(4));
//OUTPUT: 24

console.log(factorial(5));
//OUTPUT: 120
