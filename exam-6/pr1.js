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
        return (`Book purchased successfully. Copies left: ${this.#copiesAvailable}`);
      } else {
        return ('No copies available for purchase.');
      }
    }
  
    rentBook() {
      if (this.#copiesAvailable > 0) {
        this.#copiesAvailable--;
        return (`Book rented successfully. Copies left: ${this.#copiesAvailable}`);
      } else {
        return ('No copies available for rent.');
      }
    }
  
    returnBook() {
      this.#copiesAvailable++;
      return (`Book returned successfully. Copies available: ${this.#copiesAvailable}`);
    }

    checkAvailability() {
        return (`Copies available: ${this.#copiesAvailable}`);
    }
  }
  
  const book = new Book("story of lion", "Douglas Crockford", 25, 15, 10);
  
  book.checkAvailability();
  book.buyBook();
  book.checkAvailability();
  book.rentBook();
  book.checkAvailability();
  book.returnBook();
  book.checkAvailability();
  