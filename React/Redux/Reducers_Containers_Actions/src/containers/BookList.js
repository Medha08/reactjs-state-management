import React from "react";
import { connect } from "react-redux";

import { selectBook } from "../actions/index";
// makes the action to flow all across reducers
import { bindActionCreators } from "redux";

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

//takes in application state(whole)
//container acts as a link between redux and react and this function helps achieve it
//Glue btween react and redux imp func
//rerenders on state change along with component
function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList
  return {
    books: state.books, // books reducers return the property of array of books
  };
}

//Anything returned from fucntion ends to be a props in Container ie BookList Container
function mapDispatchToProps(dispatch) {
  //Whenever SelectBook is called the result or action should be
  //passed to all our reducers(by passing result to dipatch function)
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList to Component to Container - it needs to know
//about this new dispatch method,selectBook. Make it available as a prop
//take component and mapStateProps and return a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
