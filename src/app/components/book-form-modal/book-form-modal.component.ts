import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookForm } from '../../models/book-form.model';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book-form-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  templateUrl: './book-form-modal.component.html',
  styleUrl: './book-form-modal.component.scss',
})
export class BookFormModalComponent {
  readonly bookData = inject<Book>(MAT_DIALOG_DATA);
  booksService = inject(BooksService);
  dialogRef = inject(MatDialogRef);

  form = new FormGroup<BookForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    author: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl(''),
    publicationYear: new FormControl(null),
    coverImageUrl: new FormControl(''),
    genre: new FormControl(''),
  });

  ngOnInit() {
    if (this.bookData) {
      this.form.patchValue(this.bookData);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.bookData) {
      this.booksService
        .updateBook({ ...this.bookData, ...this.form.value } as Book)
        .subscribe(() => {
          this.dialogRef.close();
        });
    } else {
      this.booksService.addBook(this.form.value as Book).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  uploadCoverImage(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({ coverImageUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }
}
