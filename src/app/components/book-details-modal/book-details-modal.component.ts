import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Book } from '../../models/book.model';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookFormModalComponent } from '../book-form-modal/book-form-modal.component';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details-modal',
  standalone: true,
  imports: [MatDialogModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './book-details-modal.component.html',
  styleUrl: './book-details-modal.component.scss',
})
export class BookDetailsModalComponent {
  readonly book = inject<Book>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<BookDetailsModalComponent>);
  readonly dialog = inject(MatDialog);
  readonly booksService = inject(BooksService);

  close() {
    this.dialogRef.close();
  }

  remove() {
    this.booksService.deleteBook(this.book.id).subscribe(() => {
      this.dialogRef.close();
    });
  }

  edit() {
    this.dialogRef.close();
    this.dialog.open(BookFormModalComponent, {
      data: this.book,
      autoFocus: false,
    });
  }
}
