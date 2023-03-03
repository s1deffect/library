// // function player(name, marker) {
// //     this.name = name,
// //     this.marker = marker,
// //     this.sayName = () => {
// //         return console.log("hi" + this.name)
// //     }
// // }

// // const playerOne = new player('ahmed', "x");
// // console.log(playerOne.sayName())
// // console.log(player.prototype)
// let myLibraary = [];

// function Book(title, author, pages, statue) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.statue = statue
//     this.info = () => {
//         return console.log(`${this.title} by ${this.author} , ${this.pages}pages, ${this.statue}`)
//     }
// }


// function addBook() {
//     myLibraary.push();
// }


// const book1 = new Book('the hobit', 'martin', 300, "not read yet")
// console.log(book1)
// console.log(book1.info())






// function student(name, grade){
//     this.name = name,
//     this.grade = grade
// }
// console.log(student.prototype)
// student.prototype.sayName = () => {
//     return console.log(this.name)
// }

// student.prototype = Object.create(Array.prototype)


// console.log(student.prototype.)
// // console.log(Array.prototype)

// function personFactory(name, age) {
//     const sayHi = () => {console.log(`hi ${name}`)}
//     return {name, age, sayHi}
// }

// const person1 = personFactory("ahmed", 28)

// console.log(person1)
// person1.sayHi()

let myLibraary = [];

function Book(title,author, pages, statue) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.statue = statue;
}
// myLibraary.push(Book("game of thrones", "martin luther", 101, "read")) 
// myLibraary.push(book1)
const book2 = new Book("fifty shades of grey", " ahmed ashraf", 200, "read")
myLibraary.push(book2)
// console.log(myLibraary)



function addBookToLibrary(book) {
    myLibraary.push(book)
}

function creatCard(book) {
    const card = document.createElement('div');
    card.className = "card";

    const title = document.createElement('h1');
    title.textContent= book.title;
    card.appendChild(title);

    const author = document.createElement('h2');
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement('div');
    pages.textContent = book.pages;
    card.appendChild(pages);
    const page = document.querySelector('.main');

    page.appendChild(card);
}

//display book on the page
function displayBook() {
    for (book of myLibraary) {  
        creatCard(book);
    }
}
//createBook()
document.querySelector('.form').addEventListener('submit', (e) => {
    
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const statue = 'read';
    let bookItem = new Book(title, author, pages,statue);
    addBookToLibrary(bookItem);
    // displayBook()
    // console.log(bookItem)
    
    
})
console.log(myLibraary);
displayBook();

