function removeZeros(num) {
  var stringified = num.toString();
  var zeroLess = '';

	for (var i = 0; i < stringified.length; i++) {
    if (stringified[i] !== "0") {
    	zeroLess += stringified[i];
    }
  }

  if (!zeroLess) {
    return NaN;
  } else {
    return parseFloat(zeroLess, 10);
  }
}















//EXAMPLE TESTS

console.log(removeZeros(6006606.203));
//OUTPUT: 6666.23

console.log(removeZeros(0));
//OUTPUT: NaN
