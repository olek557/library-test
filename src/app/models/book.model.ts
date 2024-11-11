export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
  description: string;
  coverImageUrl?: string;
  genre?: string;
}
