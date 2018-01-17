
function mySlice(arr, begin, end) {
  //console.log(begin);

  if (begin === undefined) {
  	begin = 0;
  }

  if (begin < 0) {
  	begin = arr.length + begin;
  }

  if (end === undefined) {
  	end = arr.length;
  }

  if (end < 0) {
    end = arr.length + end;
  }

  var newArray = [];
  for (var i = begin; i < end; i++) {
  	newArray.push(arr[i]);
  }

  return newArray;
}









//EXAMPLE TESTS

console.log(mySlice([1,2,1]));
//OUTPUT: [1, 2, 1]

console.log(mySlice([1,2,1], 1));
//OUTPUT: [2, 1]

console.log(mySlice([1,2,3,4], 2, 3));
//OUTPUT: [3]

console.log(mySlice([1,2,3,4], 0, -1));
//OUTPUT: [1, 2, 3]
