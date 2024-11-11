import { FormControl } from '@angular/forms';

export interface BookForm {
  title: FormControl<string>;
  author: FormControl<string>;
  publicationYear: FormControl<number | null>;
  description: FormControl<string | null>;
  coverImageUrl: FormControl<string | ArrayBuffer | null | null>;
  genre: FormControl<string | null>;
}
