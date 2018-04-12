//object properties in javascript
var person={
    firstname : "bujji",
    lastname : "babu",
    eyecolor : 'black'
};

//Add,change,delete the object properties
//3 ways
//1.===>Objectname.property //person.firstname

//2.===>objectname['property']  ////person['fistname']

//3.====>objectname[expression] // var x = "age";
person[x];
var x = "eyecolor";
console.log(person.firstname);
console.log(person["firstname"]);
console.log(person[x]);


var text=" ";
for(y in person){
    text += person[y];
    text += "  ";
    }
console.log(text);

person.nationality = "English";
console.log(person.nationality);

