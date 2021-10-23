import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  booksReducer,
  
store = createStore(
  reducer,
  applyMiddleware(thunk),
 );

 export default Store;
