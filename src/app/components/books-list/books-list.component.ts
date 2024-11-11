import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Book } from '../../models/book.model';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsModalComponent } from '../book-details-modal/book-details-modal.component';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookFormModalComponent } from '../book-form-modal/book-form-modal.component';
import { BooksService } from '../../services/books.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: 0 }),
            stagger(50, [
              animate('500ms ease-out', style({ opacity: 1, width: '100%' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('500ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class BooksListComponent {
  @Input() books: Book[] = [];
  @Input() totalCount = -1;

  booksService = inject(BooksService);
  readonly dialog = inject(MatDialog);

  showBookDetails(book: Book) {
    this.dialog.open(BookDetailsModalComponent, {
      data: book,
    });
  }

  editBook(book: Book) {
    this.dialog.open(BookFormModalComponent, {
      data: book,
      autoFocus: false,
    });
  }

  deleteBook(book: Book) {
    this.booksService.deleteBook(book.id);
  }
}
