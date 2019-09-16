function Animal(name) {
    this.name = name;
}
Animal.prototype.printname = function() {
    console.log(this.name);
}

function mynew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsarray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsarray.slice(1));
    return obj;
}

var cat = mynew(Animal, 'cats');
cat.printname();

// var cat = new Animal('cat');
// var dog = new Animal('dog');
// dog.printname();



var person = function(name, age) {
    this.name = name;
    this.age = age;
}
var p1 = mynew(person, 'hasib', 22);
console.log(p1.name);