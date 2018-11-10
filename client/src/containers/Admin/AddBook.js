import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/'

class AddBook extends Component {

  state = {
    formData: {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  }

  componentWillUnmount() {
    this.props.dispatch(actionCreators.clearNewBook())
  }

  onChangeInputHandler = (event, name) => {
    const newFormData = {
      ...this.state.formData
    }

    newFormData[name] = event.target.value;

    this.setState({
      formData: newFormData
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.props.dispatch(actionCreators.addBook({
      ...this.state.formData,
      ownerId: this.props.user.id
    }))

    this.setState({
      formData: {
        name: '',
        author: '',
        review: '',
        pages: '',
        rating: '',
        price: ''
      }
    })
  }

  showNewBook = book => (
    book.post ? 
      <div className="conf_link">
        Cool !! <Link to={`/books/${book.bookId}`}>
          Click the link to see the post
        </Link>
      </div>
    :null
  )

  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Add a review</h2>

          <div className="form_element">
            <input 
              type="text"
              placeholder="Enter name"
              value={this.state.formData.name}
              onChange={(event) => this.onChangeInputHandler(event, 'name')}
            />
          </div>

          <div className="form_element">
            <input 
              type="text"
              placeholder="Enter author"
              value={this.state.formData.author}
              onChange={(event) => this.onChangeInputHandler(event, 'author')}
            />
          </div>

          <textarea
            value={this.state.formData.review} 
            onChange={(event) => this.onChangeInputHandler(event, 'review')}
          />

          <div className="form_element">
            <input 
              type="text"
              placeholder="Enter pages"
              value={this.state.formData.pages}
              onChange={(event) => this.onChangeInputHandler(event, 'pages')}
            />
          </div>

          <div className="form_element">
            <select
              value={this.state.formData.rating}
              onChange={(event) => this.onChangeInputHandler(event, 'rating')}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form_element">
            <input 
              type="number"
              placeholder="Enter price"
              value={this.state.formData.price}
              onChange={(event) => this.onChangeInputHandler(event, 'price')}
            />
          </div>

          <button type="submit">Add Review</button>

          {
            this.props.book.newBook ? 
              this.showNewBook(this.props.book.newBook)
              :null
          }
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.books
  }
}

export default connect(mapStateToProps)(AddBook);