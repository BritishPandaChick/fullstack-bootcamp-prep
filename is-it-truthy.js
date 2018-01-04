function isTruthy (val) {
  if (val) {
    return true;
  } else {
    return false;
  }
}








//EXAMPLE TESTS
console.log(isTruthy('Hello World!'));
// OUTPUT: true

console.log(isTruthy(''));
// OUTPUT: false

console.log(isTruthy(0));
// OUTPUT: false
