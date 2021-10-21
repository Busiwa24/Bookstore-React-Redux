import React from 'react';
import NewBook from './NewBook';
import Books from './Books';

const books = [
  {
    id: 1,
    category: 'Action',
    name: 'Super woman',
    author: 'Steven Spielberg',
    percentage: '45%',
    chapter: 'Chapter 14',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Journey to Mars',
    author: 'Peter S. Miller',
    percentage: '8%',
    chapter: 'Chapter 3: "Limited Oxygen"',
  },
  {
    id: 3,
    category: 'Romance',
    name: 'Somewhere between love and forever',
    author: 'Mya Bridges',
    percentage: '5%',
    chapter: 'Introduction',
  },
];

const BookList = () => (
  <>
    <div>
      {books.map((book) => (
        <Books key={book.id} info={books} />
      ))}
    </div>
    <div>
      <NewBook />
    </div>
  </>
);

export default BookList;
