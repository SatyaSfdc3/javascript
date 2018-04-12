var cars= ['Merc','BMW','VOLVO'];
cars.push('Innova');
console.log(cars,typeof cars);
console.log(4);

var mixedArray=[];
mixedArray[0]=new Date('12/12/2016');
console.log(mixedArray);

mixedArray[1]=function myFunction() {
    
};

mixedArray[2]=cars;

console.log(mixedArray);
console.log(cars.sort());

for(i=0;i<cars.length;i++){
    console.log(cars[i]);

}

for(i=0;i<10;i++){

   console.log(i);
}

//if the element is Array or not
console.log(Array.isArray(cars));
console.log(cars instanceof Array);
