function countUpThenDown(num) {

  var array = [];
  for (var i = 0; i < num; i++) {
    array.push(i);
  }
  for (var j = num; j > -1; j--) {
    array.push(j);
  }
  return array;
}










//EXAMPLE TESTS

console.log(countUpThenDown(2));
//OUTPUT: [0, 1, 2, 1, 0]

console.log(countUpThenDown(0));
//OUTPUT: [0]
