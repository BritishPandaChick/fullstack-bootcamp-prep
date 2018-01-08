function howEqual(val1, val2) {
  if (val1 === val2) {
    return "strictly";
  } else if (val1 == val2) {
    return "loosely";
  } else {
    return "not equal";
  }
}

//EXAMPLE TESTS

console.log(howEqual(0,'0'));
// OUTPUT: 'loosely'

console.log(howEqual(3, 9/3));
// OUTPUT: 'strictly'

console.log(howEqual(true, 'truthy'));
// OUTPUT: 'not equal'

console.log(howEqual(false, '0'));
// OUTPUT: 'loosely'

console.log(howEqual(0,''));
// OUTPUT: 'loosely'
