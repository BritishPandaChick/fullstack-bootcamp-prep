
function askPolitely(sentence) {
  if (sentence[sentence.length - 1] === "?") {
    if (sentence.slice(-7) === "please?") {
      return sentence;
     } else {
      return sentence.slice(0, -1) + " please?";
     }
	} else {
  	return sentence;
	}
}

// EXAMPLE TESTS

console.log(askPolitely("May I borrow your pencil?"));
// OUTPUT: "May I borrow your pencil please?"

console.log(askPolitely("May I borrow your pencil please?"));
// OUTPUT: "May I borrow your pencil please?"

console.log(askPolitely("My name is Grace Hopper."));
// OUTPUT: "My name is Grace Hopper."
