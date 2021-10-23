import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';
import BookModal from './BookModal';
import Spinner from './Spinner';

const BookContainer = () => {
  useEffect(() => {
  }, []);
  const arr = useSelector((state) => state.booksReducer.books);
  const bool = useSelector((state) => state.booksReducer.loading);
  arr.forEach(element => {  /* eslint-disable-line */
    element[0].progress = Math.floor(Math.random() * 100);; /* eslint-disable-line */
  });
  return (
    <div className="books-container">
      {bool ? <Spinner /> : null}
      <BookModal />
      {arr.map((book) => (
        <BookInfo book={book} key={uuidv4()} />
      ))}
    </div>
  );
};

export default BookContainer;
