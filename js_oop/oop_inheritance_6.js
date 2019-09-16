// function person() {
//     this.name = 'twincle cats';
// }


// function teacher() {
//     person.call(this);
//     this.subject = 'javascript';
// }

// var teacher = new teacher();


// var name = teacher.name;
// console.log(teacher.name);


function person(name) {
    this.name = name;
}
person.prototype.printName = function() {
    console.log('Name : ' + this.name);
}
person.prototype.another = function() {
    console.log('this  is an another function ');
}

function Student(name, id) {
    person.call(this, name);
    this.id = id;
}

Student.prototype = Object.create(person.prototype);

Student.prototype.constructor = Student;

var student = new Student('hasib sheikh', 328398);