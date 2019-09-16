// function printme() {
//     console.log('hello, ' + this.name);
// }
// var obj1 = {
//     name: 'hasib shekh',
//     age: 20
// }

// var obj2 = {
//     name: 'masum ali',
//     email: 'masum@gmail.com'
// }

// var binded1 = printme.bind(obj1);
// var binded2 = printme.bind(obj2);


// binded1();
// binded2();


function add(a, b) {
    return (a + b) + this.c;
}

var obj1 = {
    c: 56
}
var obj2 = {
    c: 77
}

var call = add.call(obj1, 4, 5);
call;

var apply = add.apply(obj2, [5, 6]);
apply

var bainded = add.bind(obj2);
console.log(bainded(4, 5));