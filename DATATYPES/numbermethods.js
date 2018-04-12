//toExponential()
var y=9.536;
console.log("========toExponential============");
console.log(y.toExponential(),
    y.toExponential(2), y.toExponential(4));

//toFixed()
console.log("=====toFixed========");
console.log(y.toFixed(0), y.toFixed(2));

//toPresision()
console.log("====toPriscision====");
console.log(y.toPrecision(), y.toPrecision(2), y.toPrecision(4));

//valueOf()
console.log("=======valueOf=========");
console.log(y.valueOf(), (123).valueOf(), (100+23).valueOf());

//coverting variables to numbers
//Number()
console.log("=======Number()========");
var result = true;
console.log(Number(result));

console.log(Number("10"));

//parseInt
console.log("======parseInt()=======");
console.log(parseInt(result));
console.log(parseInt(10));
console.log(parseInt("hundred"));
console.log(parseInt("10,20"));

//parseFloat
console.log("======parseFloat()=======");
console.log(parseFloat(result));
console.log(parseFloat(20.33));
console.log(parseFloat(10,20));

//Number properties
console.log('max value of JS number = '+Number.MAX_VALUE);
console.log(" ");
console.log('min value of Js Number = '+Number.MIN_VALUE);
console.log("");





