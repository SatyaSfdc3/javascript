var x1 = 9999999999999999;
var x2 = 99999999999999999;
console.log(x1, x2);

//to reduce the conflict of number one of the way is

var x3 = (0.2*10 + 0.1*10)/10;
console.log(x3);

var x4 = 128;
console.log('Hexadecimal value is ===>' +x4.toString(16));

//to know octal value
console.log('Octal value is =====>' +x4.toString(8));

//to know the binary value
console.log('Binary value is =====>' +x4.toString(2));

//255
var hexa = 0xFF;
console.log('Decimal value is ===>' +hexa.toString(10));


//infinity
var x5=2/0;
console.log('infinity test is==>' +x5);
console.log(typeof infinity);

//NaN-not a number
var x6 = 100/"Hundred";
console.log(x6, isNaN(x6));

var x7=100/"100";
console.log(x7);



