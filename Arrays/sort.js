var digitals=['1','2','3','4','5','6','7','8','9'];
function General() {
    console.log(digitals.sort());
}
function Special() {
    console.log(digitals.reverse());
}

//Compare
var points=[40,100,1,5,25,10,15];
points.sort(function(a,b){return a - b});
console.log(points);


var points=[40,100,1,5,25,10,15];
points.sort(function(a,b){return b - a});
console.log(points);


//Randomize
points.sort(function(a,b){return 0.5 - Math.random()});
console.log(points);

//sorting based on numeric object param
var cars=[
    {name:'volvo', year: 2015},
    {name:'Merc', year: 2011},
    {name:'bmw', year: 2013},
];

console.log(cars);
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

//sorting based on string object param
cars.sort(function(a,b){
    var x=a.name.toLowerCase();
    var y=b.name.toLowerCase();
    if( x < y ) {return -1};
    if( x > y ) {return 1};
    return 0;
});
console.log(cars);