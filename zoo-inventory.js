function zooInventory(zoo) {
  var inventory = [];

 	for (var i = 0; i < zoo.length; i++) {
    var animal = zoo[i];
    inventory.push(animal[0] + " the " + animal[1][0] + " is " + animal[1][1]);
 }
  return inventory;
}
