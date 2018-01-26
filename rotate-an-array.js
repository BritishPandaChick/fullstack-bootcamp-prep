function rotate(arr, steps) {
  var rotate = steps,
  index;

  while(rotate > 0) {
    index = arr.pop();
    arr.unshift(index);

    rotate--;
  }
  return arr;
}










//EXAMPLE TESTS

rotate([22, 11, 500, 92], 2);
//Output: [500, 92, 22, 11]
