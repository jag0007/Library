class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function addBookToLibrary(title, author, library) {
  library.push(new Book(title, author));
}

function removeFromLibrary(title, author, library) {
  library.splice(library.indexOf(new Book(title, author)), 1);
}

function createBookRow(book, library, container) {
  const new_book = document.createElement('tr');
  new_book.classList.add('book');

  const title_data = document.createElement('td');
  title_data.classList.add('book-title');
  title_data.innerHTML = book.title;

  const author_data = document.createElement('td');
  author_data.classList.add('book-author');
  author_data.innerHTML = book.author;

  const delete_book_button = document.createElement('button');
  delete_book_button.classList.add('delete-book-button');
  delete_book_button.innerHTML = 'Remove';
  const delete_book = document.createElement('td');
  delete_book.appendChild(delete_book_button);

  var title = book.title;
  var author = book.author;

  delete_book_button.addEventListener("click", () => {
    removeFromLibrary(title, author, library)
    displayLibrary(library, container);
  });

  new_book.appendChild(title_data);
  new_book.appendChild(author_data);
  new_book.appendChild(delete_book);

  return new_book; 
}

function displayLibrary(library, container) {
  container.replaceChildren();

  library.forEach(book => {
    const new_book = createBookRow(book, library, container);
    container.appendChild(new_book);
  });

}

function addBookClick(e) {
  e.preventDefault();
  let book_name = document.getElementsByClassName('book-title-input')[0].value;
  let book_author = document.getElementsByClassName('book-author-input')[0].value;
  addBookToLibrary(book_name, book_author, library);
  const book_display = document.getElementsByClassName('book-shelf')[0];
  displayLibrary(library, book_display);
  let dialog = document.getElementById('new-book-dialog');
  dialog.close();
}

const new_book_button = document.getElementsByClassName('add-book-button')[0];
new_book_button.addEventListener("click", () => {
  const new_book_dialog = document.getElementById('new-book-dialog');
  new_book_dialog.showModal();
  const add_book_button = document.getElementsByClassName('submit-book')[0];
  add_book_button.addEventListener("click", addBookClick, false);
});

library = [];
library.push(new Book("Of Mice And Men", "John Steinbeck"));
library.push(new Book("The Cay", "Theodore Taylor"));

const shelf = document.getElementsByClassName('book-shelf')[0];
displayLibrary(library, shelf);



