import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//Mapping of our Reducer
//Any key provided to combine reducer end up to be a key of appln/global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
