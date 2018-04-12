//Object methods in javascript
//1st way ===> methodName : function() {
                                //codeline}

//}
//2nd  way
//objectName.methodName();

var person = {
    firstName: 'john',
    lastName: 'greeshma',
        eyecolor:'black',
fullName: function(){
        return this.firstName + " " + this.lastName;

}}

console.log(person.fullName());

var x = " P N V S";
console.log(x.toLocaleLowerCase());
