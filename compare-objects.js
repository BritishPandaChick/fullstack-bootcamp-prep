function compareObjects(obj1, obj2) {

  for(var key in obj1) {
      if(obj1[key] !== obj2[key]) {
          return false
      }
  }
  for(var key2 in obj2) {
      if(obj2[key2] !== obj1[key2]) {
          return false
      }
  }
  return true;
}

//EXAMPLE TESTS

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true
