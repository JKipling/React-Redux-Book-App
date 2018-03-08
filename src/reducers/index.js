import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,                  //This reducer is going to add a key to our global application state, called books, where the key is books and value is whatever gets returned from the books reducer, which is an array of books. 
  activeBook: ActiveBook
});                                    

export default rootReducer;

