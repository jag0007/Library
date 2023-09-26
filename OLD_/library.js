class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function create_book_div(book) {
    const new_book = document.createElement('div');
    new_book.classList.add('book');

    const book_title = document.createElement('p');
    book_title.classList.add('title');
    book_title.textContent = book.title; 
    new_book.appendChild(book_title);

    const book_author = document.createElement('p');
    book_author.classList.add('author');
    book_author.textContent = book.author; 
    new_book.appendChild(book_author);

    return new_book;
}

const new_book_button = document.getElementsByClassName('add-book')[0];
const new_book_dialog = document.getElementById('new-book-dialog');
new_book_button.addEventListener("click", () => {
  new_book_dialog.showModal();
  const add_book_button = document.getElementsByClassName('submit-book')[0];
  add_book_button.addEventListener("click", addBookClick, false);
});

function addBookClick(event){
  let book_name = document.getElementsByClassName('book-title-input')[0].value;
  let book_author = document.getElementsByClassName('book-author-input')[0].value;
  user_book = new Book(book_name, book_author);
  library.push(user_book);
  add_to_book_display(user_book, '#book-shelf');
  event.preventDefault();
  new_book_dialog.hideModal();
}

function add_to_book_display(book, container) {
  let book_container = document.querySelector(container)
  book_container.appendChild(create_book_div(book));
}

const library = [] 
library.push(new Book("Of Mice And Men", "John Steinbeck"));
library.push(new Book("The Cay", "Theodore Taylor"));

library.forEach(book => {
  console.log(book)
  add_to_book_display(book, '#book-shelf')
});
