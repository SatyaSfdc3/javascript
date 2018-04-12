//Object prototypes
//object.prototype
//new Date()==>Date.prototype


function deliverItem(Name, code, serial, color){
    this.Name = Name;
    this.code = code;
    this.serial = serial;
    this.color = color;

}
var pen = new deliverItem("REYNOLDS", 3333, 'A201', 'BLUE');
var pencil = new deliverItem("Apsara", 4444, 'B592', 'brown');

console.log(pen,pencil);

pen.point=0.5;
console.log(pen);

pen.name=function(){
    return this.Name + "  " + this.code;
}