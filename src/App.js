import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Nav';
import BookList from './components/BookList';
import Categories from './components/Categories';

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
      {books.map((books) => <Book key={books.id} info={books} />);}
    </div>
    <div>
     <NewBook />
    </div>
  </>
);

export default BookList;

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
};
