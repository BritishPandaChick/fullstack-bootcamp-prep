function vowelsCount(str) {
  var count = 0;
  for (var index = 0; index < str.length; index++) {
    if (str[index].toLowerCase() === "a" || str[index].toLowerCase() === "e" || str[index].toLowerCase() === "i" || str[index].toLowerCase() === "o" || str[index].toLowerCase() === "u") {
      count++;
    }
  }
  return count;
}








//EXAMPLE TESTS

console.log(vowelCount("Good Job"));
// OUTPUT: 3


console.log(vowelCount('Yankees'));
// OUTPUT: 3
