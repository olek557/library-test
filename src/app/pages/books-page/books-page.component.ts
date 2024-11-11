import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { BooksListComponent } from '../../components/books-list/books-list.component';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [BooksListComponent, CommonModule, SearchComponent],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent {
  booksService = inject(BooksService);
  totalCount: number = -1;
  filteredBooks: Signal<Book[]> = computed(() => this.filterBooks());
  searchTerm: WritableSignal<string> = signal('');

  search(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  filterBooks() {
    const result = this.booksService
      .getBooks()
      .filter(
        (book) =>
          book.title.toLowerCase().includes(this.searchTerm().toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
    this.getTotalCount(result.length);

    return result;
  }

  getTotalCount(newLength: number) {
    if (this.totalCount !== newLength) {
      this.totalCount = newLength;
    } else if (!this.searchTerm()) {
      this.totalCount = -1;
    }
  }
}
