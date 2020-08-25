// get arg as state and action
// state argument is not application state
// only the state this reducer is responsible of

//same state keeps flowing in reducer when action occurs over and over again
export default function (state = null, action) {
  // dont' mutate state in reducer state.title = book.title return state
  // always return fresh object
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  //default value of state null ehen app loads first time and no book selected
  // undefined returned otherwise
  // not allowed to return undefined from reducer by redux

  // case when the action is not concered about state it handles
  return state;
}

// actions sent when app loads up  return null handle in BookDetail
