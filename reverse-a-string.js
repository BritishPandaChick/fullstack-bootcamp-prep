function reverseString(str) {
  var finalString = "";

  for(var last = str.length - 1; last >= 0; last--) {
    finalString += str[last];
  }
  return finalString;
}








console.log(reverseString("hello"));
// OUTPUT: 'olleh'

console.log(reverseString('Greetings from the moon!'));
// OUTPUT: '!noom eht morf sgniteerG'
