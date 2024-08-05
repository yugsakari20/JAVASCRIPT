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
        console.log(`Book purchased successfully. Copies left: ${this.#copiesAvailable}`);
      } else {
        console.log('No copies available for purchase.');
      }
    }
  
    rentBook() {
      if (this.#copiesAvailable > 0) {
        this.#copiesAvailable--;
        console.log(`Book rented successfully. Copies left: ${this.#copiesAvailable}`);
      } else {
        console.log('No copies available for rent.');
      }
    }
  
    returnBook() {
      this.#copiesAvailable++;
      console.log(`Book returned successfully. Copies available: ${this.#copiesAvailable}`);
    }

    checkAvailability() {
      console.log(`Copies available: ${this.#copiesAvailable}`);
    }
  }
  
  const book = new Book("JavaScript: The Good Parts", "Douglas Crockford", 25, 5, 10);
  
  book.checkAvailability();
  book.buyBook();
  book.checkAvailability();
  book.rentBook();
  book.checkAvailability();
  book.returnBook();
  book.checkAvailability();
  