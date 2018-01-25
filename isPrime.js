function isPrime(num) {
	if (num % 2 === 0) {
  	return false;
  } else {
    return true;
  }
}

//EXAMPLE TESTS

console.log(isPrime(5));
//OUTPUT: true

console.log(isPrime(10));
//OUTPUT: false
