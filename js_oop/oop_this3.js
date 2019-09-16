// var obj = {
//     name: 'hasib shekh',

//     print: function() {
//         console.log(this);

//     }
// }

// obj.print();


// function myfunc() {
//     function inner() {
//         console.log(this);

//     }
//     new inner()
// }
// myfunc();


// var person = {
//     name: 'hasib shekh',
//     print: function() {
//         // console.log(this);

//         console.log('hello ,' + this.name);
//     }
// }


// // person.print();
// // var myprint = function() {

// //     // console.log(this);

// //     console.log('hello ,' + this.name);
// // };

// var myprint = person.print.bind(person);
// // console.log(myprint);
// myprint();



// function person(name, print) {
//     fname = 'hasib';
//     return fname + ' ' + this.lname;
// }

// var obj = {
//     lname: 'shekh'
// }


// var binded = person.bind(obj);
// result = binded();
// console.log(result);

var person = {
    name: 'Twinkle Cats',

    print: function() {

        // var name = this.name;
        setTimeout(function() {

            console.log(this);
            console.log('Hello, ' + this.name);

        }.bind(this), 2000);
    }
}