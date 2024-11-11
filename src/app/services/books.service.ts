import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { books as mock_books } from './books-mock';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private localStorageKey = 'books';
  private books: WritableSignal<Book[]> ;

  constructor() {
    this.seedBooks();
    this.books = signal(this.getBooksFromLocalStorage());
  }

  getBooksFromLocalStorage(): Book[] {
    const books = localStorage.getItem(this.localStorageKey);
    return books ? JSON.parse(books) : [];
  }

  getBooks(): Book[] {
    return this.books();
  }

  setBooksToLocalStorage(books: Book[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(books));
  }

  addBook(book: Book): Observable<Book> {
    const books = this.getBooksFromLocalStorage();
    book.id = this.generateUniqueId();
    books.push(book);
    this.setBooksToLocalStorage(books);
    this.books.set(books);
    return of(book);
  }

  updateBook(updatedBook: Book): Observable<Book> {
    const books = this.getBooksFromLocalStorage();
    const bookIndex = books.findIndex((b) => b.id === updatedBook.id);
    if (bookIndex !== -1) {
      books[bookIndex] = updatedBook;
      this.setBooksToLocalStorage(books);
    }
    this.books.set(books);
    return of(updatedBook);
  }

  deleteBook(bookId: number): Observable<boolean> {
    const books = this.getBooksFromLocalStorage().filter(
      (book) => book.id !== bookId
    );
    this.setBooksToLocalStorage(books);
    this.books.set(books);
    return of(true);
  }

  seedBooks() {
    const books = this.getBooksFromLocalStorage();

    if (!books.length) {
      console.log('Seeding books');
      this.setBooksToLocalStorage(mock_books);
    }
  }

  generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
