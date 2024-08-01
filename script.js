let myLibrary = [
  {
    title: "Jean Jean",
    author: "Guy guy",
    pages: 350,
    status: "read",
  },
  {
    title: "Jean Jean Joe",
    author: "Guy guy Jean",
    pages: 220,
    status: "read",
  },
];

const libraryContainer = document.getElementById("container");
const newBookBtn = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const addBookBtn = document.getElementById("dialog-add-btn");

//display all books
myLibrary.forEach((book) => {
  addBookCard(book);
});

//Show dialog box for adding new book
newBookBtn.addEventListener("click", () => {
  document.getElementById("new-book-title").value = "";
  document.getElementById("new-book-author").value = "";
  document.getElementById("new-book-pages").value = "";
  document.getElementById("new-book-status").value = "";
  dialog.showModal();
});

addBookBtn.addEventListener("click", () => {
  const newBookTitle = document.getElementById("new-book-title");
  const newBookAuthor = document.getElementById("new-book-author");
  const newBookPages = document.getElementById("new-book-pages");
  const newBookStatus = document.getElementById("new-book-status");

  const newBook = new Book(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value,
    newBookStatus.value
  );

  addBookToLibrary(newBook);
  addBookCard(newBook);
  dialog.close();
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function addBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  // const bookStatus = document.createElement("p");
  const bookStatus = document.createElement("div");
  bookStatus.id = "status-container";
  const bookStatusBtn = document.createElement("div");
  bookStatusBtn.className = "toggle";
  bookStatusBtn.addEventListener("click", () => {
    bookStatusBtn.classList.toggle("on");
  });
  const deleteBtn = document.createElement("button");

  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages.textContent = `Number of pages: ${book.pages} pages`;
  // bookStatus.textContent = `Status: ${book.status}`;
  deleteBtn.textContent = "Delete Book";
  deleteBtn.addEventListener("click", () => {
    bookCard.remove();
    myLibrary.splice(myLibrary.indexOf(book), 1);
  });

  bookStatus.appendChild(bookStatusBtn);

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookStatus);
  bookCard.appendChild(deleteBtn);

  libraryContainer.appendChild(bookCard);
}
