import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Nav';
import Book from './components/Books';
import NewBook from './components/NewBook';
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

const App = () => {
  const bookList = books.map((books) => <Book key={books.id} info={books} />);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={bookList} />
        <Route exact path="/">
          <NewBook />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
