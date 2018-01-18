function myJoin(arr, delimiter) {
	var joinStr = '';

  if (delimiter === undefined) {
  	delimiter = ',';
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== null) {
      if (i === arr.length - 1) {
      	joinStr += arr[i];
      } else {
  		joinStr +=  arr[i] + delimiter;
      }
    }
  }

  return joinStr;
}









//EXAMPLE TESTS

console.log(myJoin(['hello', undefined, 'world'], ' '));
// OUTPUT: 'hello world'
console.log(myJoin([2, "be", false]));
// OUTPUT: '2,be,false`
