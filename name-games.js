function playNameGame(name) {

  var slicedName = name.toLowerCase();

  if ('aeiou'.includes(slicedName[0])){
  slicedName = name[0].toLowerCase() + name.slice(1);
  } else {
    slicedName = name.slice(1);
  }
  return name + " " + name + " " +  "Bo B" + slicedName + " Banana Fana Fo F" + slicedName + " Fee Fi Mo M" + slicedName + " " + name;
}









//EXAMPLES TESTS
console.log(playNameGame('Daniel'));
// OUTPUT: "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"

console.log(playNameGame('Ariel'));
// OUTPUT: "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"
