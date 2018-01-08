function count(n, m, direction) {
  var array = [];

  if (direction === "Up") {
  	for (var up = 0; up <= n; up+=m) {
   	 if (up !== 0) array.push(up);
  	}
  } else {
    for (var down = n; down >= 0; down-=m) {
      if (down !== 0) array.push(down);
    }
  }

	return array;

}





//EXAMPLE TESTS

console.log(count(10, 2, "Up"));
// OUTPUT: [2, 4, 6, 8, 10]

console.log(count(11, 2, "Down"));
// OUTPUT: [11, 9, 7, 5, 3, 1]
