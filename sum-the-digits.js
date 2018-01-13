function sumOfDigits (number) {
  var strNum;
  if(isNaN(number)) {
    return 0;
  } else {
    strNum = number.toString();
  }

  var sum = 0;
  for (var i=0; i <strNum.length; i++) {
    var num = parseInt(strNum.charAt(i));
    sum += num;
  }
  return sum;
}



//EXAMPLE TESTS

console.log(sumOfDigits(414));
//OUTPUT: 9

console.log(sumOfDigits(2913));
//OUTPUT: 15
