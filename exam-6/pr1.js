class Book {
  #author;
  #price;
  #rentalPrice;
  #copiesAvailable;

  constructor(title, author, price, rentalPrice, copiesAvailable) {
    this.title = title;
    this.#author = author;
    this.#price = price;
    this.#rentalPrice = rentalPrice;
    this.#copiesAvailable = copiesAvailable;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getAuthor() {
    return this.#author;
  }

  setAuthor(newAuthor) {
    this.#author = newAuthor;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(newPrice) {
    this.#price = newPrice;
  }

  getRentalPrice() {
    return this.#rentalPrice;
  }

  setRentalPrice(newRentalPrice) {
    this.#rentalPrice = newRentalPrice;
  }

  getCopiesAvailable() {
    return this.#copiesAvailable;
  }

  setCopiesAvailable(newCopiesAvailable) {
    this.#copiesAvailable = newCopiesAvailable;
  }

  buyBook() {
    if (this.#copiesAvailable > 0) {
      this.#copiesAvailable--;
      return `Book purchased successfully. Copies left: ${this.#copiesAvailable}`;
    } else {
      return 'No copies available for purchase.';
    }
  }

  rentBook() {
    if (this.#copiesAvailable > 0) {
      this.#copiesAvailable--;
      return `Book rented successfully. Copies left: ${this.#copiesAvailable}`;
    } else {
      return 'No copies available for rent.';
    }
  }

  returnBook() {
    this.#copiesAvailable++;
    return `Book returned successfully. Copies available: ${this.#copiesAvailable}`;
  }

  checkAvailability() {
    return `Copies available: ${this.#copiesAvailable}`;
  }

  BookInfo() {
    return `Title: ${this.title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
  }
}

let book = new Book("Story of Lion", "Douglas Crockford", 25, 15, 10);

console.log(book.buyBook());
console.log(book.rentBook());
console.log(book.returnBook());
console.log(book.checkAvailability());
console.log(book.BookInfo());

book.setAuthor("yug");
book.setPrice(250);
book.setRentalPrice(150);
book.setCopiesAvailable(20);

console.log(book.BookInfo());
