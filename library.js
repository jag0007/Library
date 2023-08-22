class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class ColorSelector {
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

function create_book_div(book, color_selector) {
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

    return new_book;
}

function create_book_display(books, class_name, colorSelection) {
  let book_container = document.querySelector('div')
  book_container.classList.add(class_name);
  books.forEach(book => {
    book_container.appendChild(create_book_div(book, colorSelection));
  });

  return book_container;
}

const library = [] 
library.push(new Book("Of Mice And Men", "John Steinbeck"));
library.push(new Book("The Cay", "Theodore Taylor"));

const root = document.getElementById('book-shelf'); 
const color_selector = new ColorSelector();

root.appendChild(create_book_display(library, 'book-container', color_selector));

const new_book_button = document.getElementsByClassName('add-book')[0];
const new_book_dialog = document.getElementById('new-book-dialog');
new_book_button.addEventListener("click", () => {
  new_book_dialog.showModal();
});


