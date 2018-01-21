function properNounFilter(word) {
  var charCode;

	if(word.charCodeAt(0) > 90) return false;

	for(var i = 1; i < word.length; i++) {
    charCode = word.charCodeAt(i);
    if(charCode >= 65 && charCode < 90) return false;
  }
  return true;
}









//EXAMPLE TESTS

console.log(properNounFilter('coffee'));
// OUTPUT: false

console.log(properNounFilter('Einstein'));
// OUTPUT: true

console.log(properNounFilter('ApoLLo'));
// OUTPUT: false
