// var obj = {};
// var obj1 = new Object;


// console.log(obj);
// console.log(obj1);

var book = {
    name: 'functional javascript',
    author: 'hasib sheikh',
    publisher: 'O\'reilly',
    page: 250,
    print: function() {
        console.log(this.name, this.author);

    }
};

// console.log(book);

// book.print();

// console.log('book name : ' + book.name);

// console.log('book author :' + book['author']);


book.price = 500;

book['published'] = 2010;


// console.log("book published :" + book.published);

for (var pops in book) {
    // console.log(pops);

    console.log(pops + " = " + book[pops]);


}