import propTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import error from './error';

const BookInfo = (props) => {
  const { book } = props;
  const {
    title, category, progress,
  } = book[0];
  return (
    <div className="book-container">
      <div className="book-fp">
        <p className="book-genre">{category}</p>
        <p className="book-title">{title}</p>
        <div className="buttons">
          <button
            className="delete-book"
            type="button"
            onClick={() => {
              error('Book removed', 'green');
            }}
          >
            {' '}
            Delete
          </button>
          <button
            className="delete-book"
            type="button"
            onClick={() => {
              // const newperc = prompt('Enter new percentage');
              // dispatch(editBook({ book, newperc }));
            }}
          >
            {' '}
            Edit
          </button>
        </div>
      </div>
      <ProgressBar progress={progress} />
      <div className="completion">
        <h3 className="chapter-title">CURRENT CHAPTER</h3>
        <p className="chapter-number">Chapter 1</p>
        <button type="button" className="chapter-button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  book: propTypes.instanceOf(Object).isRequired,
};

export default BookInfo;
