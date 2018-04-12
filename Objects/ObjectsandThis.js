//Objects in javascript
var x1 = new Boolean();//Booleans
var x2 = new Number();//Numbers
var x3 = new String();//Strings
var x4 = new Date();//dates
//Maths
var x5 = new RegExp();//Regular Expressions
var x6 = new Array();//arrays
var x7 = new Function();//Functions
var x8 = new Object();//Objects

var persons="john greesham";
var Person= {
                firstname:'john',
                lastname : "greesham",
                eyecolor : 'blue',
                fullname : function(){
                    return this.firstname + " " +
                            this.lastname;
                }

};

//3 ways of creating an object
//1.=====>Object literal
//2.=====>new keyword
//3.=====>Constructor

//Object literal
var personSmarter= {
    firstname: 'john',
    lastname: "greesham",
    eyecolor: 'blue'
};

//new keyword

var personSmarterThanSmarter = new Object();
personSmarterThanSmarter.firstname = "john";
personSmarterThanSmarter.lastname = "Greesham";


//constructor
function Person (fist, last, eye){
    this.firstname = first;
    this.lastname = last;
    this.eye = eye;
}
var Personi = new Person("jenny", "doe" , "blue");
