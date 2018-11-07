import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';

import BookItem from '../widgetsUI/bookItem';

class HomeContainer extends Component {

  componentWillMount() {
    this.props.dispatch(actionCreators.getBooks(1, 0, 'desc'))
  }

  renderBooks = (books) => {
    return (
      books.list ?
        books.list.map(item => (
          <BookItem {...item} key={item._id} />
        ))
        :null
      )
  }

  loadMore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(actionCreators.getBooks(1,count,'desc',this.props.books.list))
  }

  render() {
    return (
      <div>
        { this.renderBooks(this.props.books) }
        <div 
          className="loadmore"
          onClick={this.loadMore}
        >Load More</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(HomeContainer);