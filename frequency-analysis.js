function frequencyAnalysis(str){
  var obj = {};

  for (var i=0; i < str.length; i++){
  	if (obj[str[i]]) {
    	obj[str[i]]++;
    } else {
    	obj[str[i]] = 1;
    }
  }
	return obj;
}








console.log(frequencyAnalysis('abca'));
// OUTPUT: {a: 2, b: 1, c: 1}

console.log(frequencyAnalysis(''));
// OUTPUT: { }
