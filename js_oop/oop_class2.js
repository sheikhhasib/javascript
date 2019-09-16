// var book = [
// {
//     name : 'function javascript'
// },
// {
//     name: 'dfuefihvig'
// }
// ]

// function Person(name, email) {
//     this.name = name;
//     this.email = email;
//     this.print = function() {
//         console.log('Name is :' + this.name);

//     }
// }

// var p1 = new Person('hasib', 'hasib2130@gmail.com');
// var p2 = new Person('santo', 'santo@gmail.com');
// var p3 = new Person('Mahabub', 'mahabub@gmail.com');

// var people = [p1, p2, p3];
// console.log(p1.name);
// console.log(p1.email);
// console.log(p2)

// console.log(people);

// people.forEach(function(Person) {
//     // console.log("email is :" + Person.email);
//     Person.print();
// })


// for (var pops in p1) {
//     console.log('Properties = ' + p1[pops]);

// }


function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
}

Book.father_name = 'nabir';
var book = new Book('javascript', 'hasib', 300, );

console.log(book);