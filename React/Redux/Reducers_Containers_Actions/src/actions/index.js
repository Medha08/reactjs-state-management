export function selectBook(book) {
  //selectBook is an Action Creator,
  //it needs to return an action,
  //an object with type property
  //Action has two values -> type(purpose of actions,upper),payload(data and conditions of the action)
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
}

//action that gets returned through ends up running through all reducers
// wire up action creator to redux
