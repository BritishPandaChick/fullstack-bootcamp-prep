function zooInventory(zoo) {
  var inventory = [];

 	for (var i = 0; i < zoo.length; i++) {
    var animal = zoo[i];
    inventory.push(animal[0] + " the " + animal[1][0] + " is " + animal[1][1]);
 }
  return inventory;
}

//EXAMPLE TESTS

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

console.log(zooInventory(myZoo));
// OUTPUT:
// [
//   'King Kong the gorilla is 42',
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]
