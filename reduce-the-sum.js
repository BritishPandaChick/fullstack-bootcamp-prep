function sumReduce(arr){
  return arr.reduce(function(sum, x) {
    return sum + x;
  }, 50);
}









//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50
