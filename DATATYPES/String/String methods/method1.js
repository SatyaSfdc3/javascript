var text="Find me if you can";
console.log(text.length);
console.log('Hai this is index of example ====>'+text.indexOf('me'));
console.log("Hai this is index of exmaple ====>"+text.lastIndexOf('me'));
var fruits="Apple,Banana,kiwi";
console.log('slice in Action =====>' +fruits.slice(7,13));
//slice method
var word="cricket";
console.log('Answer is ===>' +word.slice((7) ));

//Replace Contents
var fruitsUpgraded=fruits.replace('kiwi','oranges');
console.log('replace method in action ===>' +fruitsUpgraded);


//ToUpperCase or Tolowercase
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//concatenating the strings
var x="Welcome to";
var y="Javascript";

var z=x.concat(" "+y);
var z1=x + " " +y;

console.log(z,z1);

//Extracting the string characters
console.log('testing charAt methodx' +x.charAt(1));

var fruitsArray=fruits.split(',');
console.log(fruitsArray);


