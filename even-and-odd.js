function evenOdd(arr) {
  var even = [];
  var odd = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }

  return [even, odd];
}










//EXAMPLE TEST

console.log(evenOdd([1,2,3,4,5,6]));
// OUTPUT: [ [2,4,6], [1,3,5] ]
