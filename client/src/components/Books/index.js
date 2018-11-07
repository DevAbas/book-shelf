import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/'

class BookView extends Component {

  componentWillMount() {
    this.props.dispatch(actionCreators.getBookWithReviewer(this.props.match.params.id))
  }

  componentWillUnmount() {
    this.props.dispatch(actionCreators.clearBookReviewer())
  }

  renderBook = (book) => (
    book.selectedBook ? 
      <div className="br_container">
        <div className="br_header">
          <h2>{book.selectedBook.name}</h2>
          <h5>{book.selectedBook.author}</h5>
          <div className="br_reviewer">
            <span>Review by:</span> {book.reviewer.name} {book.reviewer.lastname}
          </div>
        </div>
        <div className="br_review">
          {book.selectedBook.review}
        </div>
        <div className="br_box">
          <div className="left">
            <div>
              <span>Pages:</span> {book.selectedBook.pages}
            </div>
            <div>
              <span>Price:</span> {book.selectedBook.price}
            </div>
          </div>
          <div className="right">
            <span>Rating</span>
            <div>{book.selectedBook.rating}/5</div>
          </div>
        </div>
      </div>
      : null
  )

  render() {
    const { book } = this.props;
    return (
      <div>
        {this.renderBook(book)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.books
  }
}

export default connect(mapStateToProps)(BookView);