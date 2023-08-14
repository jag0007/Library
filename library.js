class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.book_list = [];
  }

  add_book(new_book) {
    this.book_list.push(new_book);
  }

  get books() {
    return this.book_list;
  }
}

class BookColorSelector {
  constructor() {
    this.color_options = ['red', 'blue'];
    this.next_color_index = 0;
    this.max_color_index = this.color_options.length - 1;
  }

  get next_color() {
    if (this.next_color_index === this.max_color_index) {
      this.next_color_index = 0;
      return this.color_options[this.max_color_index];
    } else {
      let color = this.color_options[this.next_color_index];
      this.next_color_index += 1;
      return color;
    }
  }
}

let library = new Library()
library.add_book(new Book("Of Mice And Men", "John Steinbeck"));
library.add_book(new Book("The Cay", "Theodore Taylor"));

const root = document.querySelector('.lib-root'); 
const book_container = document.createElement('div');
book_container.classList.add("book-container");

const color_selector = new BookColorSelector();

library.books.forEach(book => {
  const new_book = document.createElement('div');
  new_book.classList.add('book');
  new_book.style.backgroundColor = color_selector.next_color; 

  const book_title = document.createElement('p');
  book_title.classList.add('title');
  book_title.textContent = book.title; 
  new_book.appendChild(book_title);

  const book_author = document.createElement('p');
  book_author.classList.add('author');
  book_author.textContent = book.author; 
  new_book.appendChild(book_author);

  book_container.appendChild(new_book);
});

root.appendChild(book_container);


