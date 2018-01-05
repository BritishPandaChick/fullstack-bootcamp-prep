function repeat(str, num) {
  var finalString = "";
  for (num; num > 0; num--) {
    finalString += str;
  }
  return finalString;
}








//EXAMPLE TESTS

console.log(repeat("yo", 4));
// OUTPUT: 'yoyoyoyo'

console.log(repeat("yo", 0));
// OUTPUT: ''

console.log(repeat("bye", 6));
// OUTPUT: 'byebyebyebyebyebye'
