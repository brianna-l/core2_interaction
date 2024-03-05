// STRINGS
// ------------------------

console.log('\n\nSTRINGS\n\n\n');

console.log('A string with single quotes'); // single quote
console.log("A string with double quotes"); // double quote
console.log(`A string with back ticks`); // back tick
console.log('A ' + 'string ' + 'pieces'); // concatenation

// NUMBERS
// ------------------------

console.log('\n\nNUMBERS\n\n\n');

console.log(3); // number
console.log(3 + 3); // add
console.log(6 - 4); //subtract
console.log(3 * 3); // multiply
console.log(6 / 2); // divide
console.log(15 % 4); // module remainder

// STRINGS & NUMBERS
// ------------------------

console.log('\n\nSTRINGS & NUMBERS\n\n\n');

console.log('100 * 50'); // number in string
console.log('100 * 50 equals ' + 100 * 50); // string number plus number
console.log(100 * 50 + '25'); // number plus string number
console.log(`The year was ${2024 - 333} 333 years ago`); // back tick with string and number

// BOOLEAN
// ------------------------

console.log('\n\nBOOLEAN\n\n\n');

console.log(true, false); // true and false
console.log(3 < 4); // true
console.log(4 < 3); // false
console.log('3 < 4 : ', 3 < 4); // less than
console.log('2 >= 2 : ', 2 >= 2); // greater than ot equal to
console.log('3 >= 6 : ', 3 >= 6); // less than or equal to
console.log('8 + 2 == 5 + 5 : ', 8 + 2 == 5 + 5); // equal to
console.log("'tomato' != 'tomato'", 'tomato' != 'tomato'); // unequal to

// VARiABLES
// ------------------------

console.log('\n\nVARIABLES\n\n\n');

var studentLoanDebt = 800;
console.log('studentLoanDebt : ', studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt : ', studentLoanDebt);

studentLoanDebt = studentLoanDebt + 50;
console.log('studentLoanDebt : ', studentLoanDebt);

// ARRAYS
// ------------------------

console.log('\n\nARRAYS\n\n\n');

var favoriteColors = ['yellowgreen', 'fuchsia', 'gainsboro'];
console.log('favoriteColors : ', favoriteColors);
console.log(favoriteColors[1]);
console.log(favoriteColors[0], ',', favoriteColors[2]);
console.log('favoriteColors :', favoriteColors[2]);

// OBJECTS
// ------------------------

console.log('\n\nOBJECTS\n\n\n');

var me = {
    firstName: 'Brianna',
    lastName: 'Lou',
    age: 19,
    likesSummer: true,
};
console.log(me);
console.log("me['firstName'] : ", me['firstName']) // bracket notation

// ARRAY OF OBJECTS
// ------------------------

console.log('\n\nARRAY OF OBJECTS\n\n\n');

var us = [
    {
        firstName: 'Kevin',
        lastName: 'Li',
    },
    {
        firstName: 'Brianna',
        lastName: 'Lou',
    },
    {
        firstName: 'Elida',
        lastName: 'Chen',
    },
];

console.log(us);
console.log(us[0]);
console.log(us[0]['lastName']);