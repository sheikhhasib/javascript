function person(name, age) {
    this.name = name;
    this.age = age;

}



// person.prototype.hello = function() {
//     console.log('hello ,' + this.name);

// }

// person.prototype.email = 'hasib@gmail.com';


// person.prototype.print = function() {
//     console.log(this.name, 'age ' + this.age);

// }

person.prototype = {
    hello: function() {
        console.log('hello ,' + this.name);

    },
    print: function() {
        console.log(this.name, 'age ' + this.age);

    },
    email: 'hasib@gmail.com'
}

var p1 = new person('hasib sheikh', 20);
var p2 = new person('santo sheikh', 15);


console.log(p1);
console.log(p2);