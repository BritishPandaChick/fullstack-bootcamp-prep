function findKey(scale, note) {
  for(var i = 0; i < scale.length; i++) {
    if(scale[i] === note) {
      return i;
    }
  }
}

function changeKeys(arr, steps) {
  var scale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  returnArr = [],
  thisNote,
  newKey,
  key;

  //Find index of key and get new key
  for(var i =0; i < arr.length; i++) {
    thisNote = arr[i];
    key = findKey(scale, thisNote);
    //get new key for note
    newKey = key + steps;

    //function to find right index if not fit
    if(newKey > 12) {
      newKey = newKey % 12;
    }
    returnArr.push(scale[newKey]);
  }
  return returnArr;
}

//EXAMPLE TESTS

console.log(changeKeys(['E', 'F'], 1));
// OUTPUT: ['F', 'F#']

console.log(changeKeys(['G'], 5));
// OUTPUT: ['C']
