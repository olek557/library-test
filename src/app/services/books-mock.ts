import { Book } from '../models/book.model';

export const books: Book[] = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
    description:
      'A novel about the serious issues of race, class, gender, and justice in the Deep South, told through the eyes of young Scout Finch.',
    coverImageUrl: 'https://m.media-amazon.com/images/I/81gepf1eMqL.jpg',
    genre: 'Fiction',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    publicationYear: 1949,
    description:
      'A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.',
    coverImageUrl: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    genre: 'Dystopian Fiction',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationYear: 1813,
    description:
      'A romantic novel that critiques the British landed gentry and the social hierarchy of the early 19th century.',
    coverImageUrl:
      'https://cdn.penguin.co.uk/dam-assets/books/9780141439518/9780141439518-jacket-large.jpg',
    genre: 'Romance',
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
    description:
      'A story of the wealthy Jay Gatsby and his love for Daisy Buchanan, examining the American Dream and social stratification.',
    coverImageUrl: 'https://m.media-amazon.com/images/I/81af+MCATTL.jpg',
    genre: 'Tragedy',
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publicationYear: 1951,
    description:
      'A novel about teenage rebellion and angst, centered on the experiences of Holden Caulfield, a young boy in New York City.',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKbLoG01sx1LqNYQjsB5mNwZVPjN71J5i6w&s',
    genre: 'Realistic Fiction',
  },
  {
    id: 10,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    publicationYear: 1851,
    description:
      'An epic tale of the whaling industry and the obsessive quest of Captain Ahab for revenge on Moby Dick, a white whale.',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjjtZqayJnWX4S3IBvyQrZAEOOhEBprqtQw&s',
    genre: 'Adventure Fiction',
  },
  {
    id: 13,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publicationYear: 1937,
    description:
      'A fantasy adventure that follows Bilbo Baggins on a quest to reclaim the lost Kingdom of Erebor from the dragon Smaug.',
    coverImageUrl: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
    genre: 'Fantasy',
  },
];
