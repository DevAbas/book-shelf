import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment-js';
import * as actionCreators from '../../actions/';

class UserPosts extends Component {

  componentWillMount() {
    this.props.dispatch(actionCreators.getUserPosts(this.props.user.login.id))
  }

  showUserPosts = (user) => (
    user.userPosts ?
      user.userPosts.map(item => (
        <tr key={item._id}>
          <td>
            <Link to={`/user/edit-post/${item._id}`}>{item.name}</Link>
          </td>
          <td>{item.author}</td>
          <td>{moment(item.createdAt).format("MM-DD-YY")}</td>
        </tr>
      ))
    :null
  )

  render() {
    console.log(this.props.user)
    return (
      <div className="user_posts">
        <h4>Your reviews:</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.showUserPosts(this.props.user)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(UserPosts);