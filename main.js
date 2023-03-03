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
const book1 = new Book("game of thrones", "martin luther", 101, "read")
myLibraary.push(book1)
console.log(myLibraary)



function addBookToLibrary() {
    myLibraary.push(this)
}

function creatCard(book) {
    const card = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent= this.title
    const author = document.createElement('h2')
    author.textContent = this.author
    const pages = document.createElement('div')
    pages.textContent = this.pages

}

//display book on the page
function displayBook() {
    for (book in myLibraary) {  
        creatCard(book);
    }
}