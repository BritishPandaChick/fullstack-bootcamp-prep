function myLastIndexOf(arr, searchFor, fromIndex) {
  if (fromIndex === undefined) {
  	fromIndex = arr.length - 1;
  }

  for (var i = fromIndex; i >= 0 ; i--) {
    if (arr[i] === searchFor) {
    return i;
    }
  }
  return -1;
}

















//EXAMPLE TESTS

console.log(myLastIndexOf([1,2,1], 1) );
// OUTPUT: 2
console.log(myLastIndexOf([1,2,1], 1, 1));
// OUTPUT: 0
