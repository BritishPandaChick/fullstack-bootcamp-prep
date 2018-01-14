function underToCamel(underName) {
    var camelCaseOutput = '';
    var foundUnder = false;
    for(var i = 0; i<underName.length; i++) {
        if (underName[i] === '_') {
            foundUnder = true;
        } else {
            if (foundUnder) {
                camelCaseOutput += underName[i].toUpperCase();
                foundUnder = false;
            } else {
                camelCaseOutput += underName[i];
            }
        }
    }
  return camelCaseOutput;
}

console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"
