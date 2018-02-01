function myMap(arr,func){
	mappedArr = [];

  for (var i=0; i < arr.length; i++) {
  	mappedArr.push(func(arr[i], i));
  }
  return mappedArr;
}











//EXAMPLE TESTS

var arr = [1,2,3];

function double(num) {
  return num * 2;
}

console.log(myMap(arr, double));
//OUTPUT: [2,4,6]

console.log(myMap(arr, function(num) {
  return num.toString();
}));
//OUTPUT: ['1','2','3'];
