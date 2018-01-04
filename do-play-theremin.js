function doYouPlayTheTheremin(name) {
	if (name[0].toLowerCase() === "s" || name[0] === "S") {
    return name + " plays the Theremin!";
  } else {
    return name + " does not play the Theremin!";
  }
}


//EXAMPLE TESTS

console.log(doYouPlayTheTheremin('Griffin'));
// OUTPUT: 'Griffin does not play the Theremin!'

console.log(doYouPlayTheTheremin('Scott'));
// OUTPUT: 'Scott plays the Theremin!'
