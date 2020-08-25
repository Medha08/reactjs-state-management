import React from "react";
import { connect } from "react-redux";

import { bindActionToCreators } from "redux";

class BookDetail extends React.Component {
  render() {
    if (!this.props.activeBook) {
      return <div>Select a book to get Started</div>;
    }
    return (
      <div>
        <h3>Book Detail</h3>
        <div>Title: {this.props.activeBook.title}</div>
        <div>pages: {this.props.activeBook.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionToCreators({ activeBook: activeBook }, dispatch);
// }

export default connect(mapStateToProps)(BookDetail);
