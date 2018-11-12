import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/'

class EditPost extends PureComponent {

  state = {
    formData: {
      _id: this.props.match.params.id,
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  }

  componentWillMount() {
    this.props.dispatch(actionCreators.getBook(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps) {
    let book = nextProps.book.selectedBook;
    //console.log(book)
    this.setState({
      formData: {
        _id: book._id,
        name: book.name,
        author: book.author,
        review: book.review,
        pages: book.pages,
        rating: book.rating,
        price: book.price
      }
    })
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
    console.log(this.state.formData);
    this.props.dispatch(actionCreators.updateBook(this.state.formData))
  }

  render() {
    console.log(this.props);
    return (
      <div className="rl_container article">
        <form onSubmit={this.onSubmitHandler}>
          <h2>Edit review</h2>

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

          <button type="submit">Edit Review</button>

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

export default connect(mapStateToProps)(EditPost);