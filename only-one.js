function onlyOne (x, y, z) {
  return ((x && !y && !z) || (!x && y && !z) || (!x && !y && z));
}

//EXAMPLE TESTS

console.log(onlyOne(false, false, true));
// OUTPUT: true

console.log(onlyOne(0, 1, 2));
// OUTPUT: false
