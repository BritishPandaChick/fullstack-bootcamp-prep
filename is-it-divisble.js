function isDivisible (num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    console.log('argument undefined');
    return null;
  }

  if(num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}












//EXAMPLE TESTS

console.log(isDivisible(9, 3));
// OUTPUT: true

console.log(isDivisible(9, 4));
// OUTPUT: false
