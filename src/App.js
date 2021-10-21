import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Nav';
import Categories from './components/Categories';
import BookList from './components/BookList';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
