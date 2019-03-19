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
		console.log(this.currentBook);
		console.log(this.nextBook);
	}
	startReadingNextBook() {
		if (this.nextBook !== null) {
			this.currentBook = this.nextBook;
			this.nextBook = null;
			for (let book of this.bookList) {
				if (!book.isRead && book !== this.currentBook) {
					this.nextBook = book;
					break;
				}
			}
		}
		// mame dalsi knihu na cteni?
		// ano -> 
		// - zapis ji do aktualne ctene knihy
		// - do pristi knihy dej prvni neprectenou, ktera neni ta aktualni
	}
}