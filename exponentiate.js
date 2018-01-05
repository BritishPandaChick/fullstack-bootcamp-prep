function exponentiate (num, power) {
  var result = 1;

  for (var i = 1; i <= power; i++) {
    result *= num;
  }
  return result;
}












//EXAMPLE TESTS

console.log(exponentiate(2, 2));
// OUTPUT: 4

console.log(exponentiate(3, 4));
// OUTPUT: 81
