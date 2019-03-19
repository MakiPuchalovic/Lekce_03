export default class Library {
	constructor() {
		this.bookList = [];
		this.lastBook = null;
		this.currentBook = null;
		this.nextBook = null;
		this.unreadBooks = 0;
	}
	addBook( book ) {
		this.bookList.push(book);
		if (!book.isRead) {
			this.unreadBooks++;
			if(this.nextBook === null) {
				this.nextBook = book;
			}
		}
	}
	listAllBooks() {
		console.table(this.bookList);
	}
}