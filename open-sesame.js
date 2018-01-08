function openSesame (arr, str) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
    	return "You may pass.";
    	}
    }
     return "You shall not pass!";
  }







//EXAMPLE TESTS
var passwords = [
  'Password123',
  'DavidYangsMiddleName',
];

console.log(openSesame(passwords, 'Password123'));
//OUTPUT: 'You may pass.'
